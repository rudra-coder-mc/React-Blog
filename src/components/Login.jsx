import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../frachers/Auth/AuthSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authServices from "../Appwrite/Auth";

import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Loding, setLoding] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Error, setError] = useState("");

  const login = async (data) => {
    setError("");
    setLoding(true);
    try {
      const session = await authServices.Login(data);
      // console.log(session);
      if (session) {
        const userData = await authServices.getCurrentUser();
        // console.log(userData);
        if (userData) dispatch(authLogin(userData));

        navigate("/");
      }
      setLoding(false);
    } catch (error) {
      setLoding(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 dark:bg-gray-900 dark:text-white rounded-xl p-10 border `}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base ">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
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
            <p>demo account Email : forcoding111@gmail.com</p>
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
            <p>demo account Password : forcoding111</p>
            <p>{errors.password?.message}</p>
            <Button type="submit" className="w-full">
              {Loding ? "Loding..." : " Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
