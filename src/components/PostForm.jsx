import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input, RTE, Select, Container } from "./";

import fileServices from "../Appwrite/File";
import blogServices from "../Appwrite/Blog";

import { useEffect, useState, useCallback } from "react";

const PostForm = ({ post }) => {
  const navigate = useNavigate();

  useEffect;

  const { register, handleSubmit, setValue, getValues, control, watch } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const userData = useSelector((state) => state.Auth.userData);
  //   console.log(userData)

  const Submit = async ({ data }) => {
    if (post) {
      const file = data.image[0]
        ? await fileServices.uploadFile(data.image[0])
        : null;

      if (file) {
        await fileServices.deleteFile(post.featuredImage);
      }
      const dbPost = await blogServices.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await fileServices.uploadFile(data.image[0])
        : null;

      if (file) {
        data.featuredImage = file.$id;

        const dbPost = await blogServices.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    // console.log(value);
    if (value && typeof value == "string") {
      // console.log(value);
      return value.trim().toLowerCase().replace(/ /g, "-");
    }
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      // console.log(name);
      if (name === "title") {
        // console.log(slugTransform(value.title));
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <Container>
      <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { require: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { require: true })}
            onInput={(e) => {
              console.log("input slug");
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={fileServices.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default PostForm;
