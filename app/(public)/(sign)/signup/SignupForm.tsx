"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import SignupSchema from "@/app/libs/validations/SignupSchema";
import { joiResolver } from "@hookform/resolvers/joi";

export default function SignupForm() {
  const { register, handleSubmit } = useForm({
    resolver: joiResolver(SignupSchema),
  });

  const onValid = async (data: any) => {
    console.log("onValid", data);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
  };
  const onError = (error: any) => {
    console.log("onError", error);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form
        className="space-y-6"
        onSubmit={handleSubmit(onValid, onError)}
        noValidate
      >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign up to our platform
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
            {...register("email")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="username"
            required
            {...register("username")}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            {...register("password")}
          />
        </div>
        <div>
          <label
            htmlFor="password-check"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password Check
          </label>
          <input
            type="password"
            id="password-check"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register("passwordConfirm")}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign up your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link
            href="/login"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
