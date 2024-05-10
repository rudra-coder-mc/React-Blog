import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import authServices from "../Appwrite/Auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Input, Logo } from "../components";
import { login } from "../frachers/Auth/AuthSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const Data = await authServices.createAccount(data);
      if (Data) {
        console.log("log from signup from componentes", Data);
        const userData = await authServices.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
                minLength: 4,
              })}
            />
            <p>{errors.name?.message}</p>
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <p>{errors.email?.message}</p>
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            <p>{errors.password?.message}</p>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
