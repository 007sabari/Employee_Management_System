"use client";
import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date of birth",
    }),
    mobile: z.string().regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
      message: "Mobile number must be 10 digits",
    }),
    gender: z.enum(["Male", "Female"], { message: "select a valid gender" }),
    Department: z.enum(
      ["Digital Marketting", "Web Development", "Softwer Development"],
      { message: "select a valid Department" }
    ),
    address: z.string().min(1, { message: "Address is required" }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string({ message: "enter anything" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const onSubmit = (data) => {
  console.log(data);
};

const AddTm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="p-3">
      <div className="container mx-auto w-full sm:w-[96%] px-6 border drop-shadow-2xl shadow-2xl mt-5 rounded-xl">
        <h1 className="text-blue-800  text-center p-6 my-2 rounded-xl w-full sm:w-[96%] mx-auto font-black font-sans text-2xl">
          Add Team Member
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 ml-2 lg:ml-2"
          >
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Name.."
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 placeholder-gray-500 block mt-2 lg:mt-2 rounded-md py-2 mb-3"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 ml-2 lg:ml-2"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Email.."
            className="peer w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-2 placeholder-gray-500 block mt-2 lg:mt-4 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 ml-2 lg:ml-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md"
          />
          {errors.dob && <p className="text-red-600">{errors.dob.message}</p>}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 ml-2 lg:ml-2"
          >
            Mobile No
          </label>
          <input
            type="number"
            placeholder="Mobile No..."
            {...register("mobile")}
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md"
          />
          {errors.mobile && (
            <p className="text-red-600">{errors.mobile.message}</p>
          )}

          <label className="block my-1 text-sm mt-4 lg:mt-4 ml-2 lg:ml-2">
            Gender
          </label>
          <div className="flex items-center mt-4 lg:mt-4">
            <label className="text-sm">
              <input
                className="mr-2"
                type="radio"
                value="Male"
                {...register("gender")}
              />
              Male
            </label>
            <label className="text-sm">
              <input
                className="ml-4 mr-2"
                type="radio"
                value="Female"
                {...register("gender")}
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-600">{errors.gender.message}</p>
          )}

          <label className="block my-1 text-sm mt-4 lg:mt-4 ml-2 lg:ml-2">
            Department
          </label>
          <select
            {...register("Department")}
            className="border rounded px-2 py-1 w-full text-sm mt-2 lg:mt-2"
          >
            <option className="text-sm" value="">
              Select...
            </option>
            <option className="text-sm" value="Digital Marketting">
              Digital Marketting
            </option>
            <option className="text-sm" value="Web Development">
              Web Development
            </option>
            <option className="text-sm" value="Softwer Development">
              Softwer Development
            </option>
          </select>
          {errors.Department && (
            <p className="text-red-600">{errors.Department.message}</p>
          )}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mt-4 lg:mt-4 ml-2 lg:ml-2"
          >
            Address
          </label>
          <textarea
            placeholder="Address..."
            {...register("address")}
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md "
          />
          {errors.address && (
            <p className="text-red-600">{errors.address.message}</p>
          )}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mt-4 lg:mt-4 ml-2 lg:ml-2"
          >
            New Password
          </label>
          <input
            type="password"
            placeholder="New Password..."
            {...register("newPassword")}
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md "
          />
          {errors.newPassword && (
            <p className="text-red-600">{errors.newPassword.message}</p>
          )}

          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mt-4 lg:mt-4 ml-2 lg:ml-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password..."
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2 py-1 placeholder-gray-500 block mt-4 lg:mt-4 rounded-md"
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className="transition duration-100 ease-in-out delay-50 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded-xl mt-8 lg:mt-4 block mx-auto mb-4 lg:mb-4"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTm;
