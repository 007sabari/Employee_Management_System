"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const AddTask = () => {
  const [first, setFirst] = useState("");

  const teamMembers = [
    "Team Members",
    "Sabari",
    "Kesavan",
    "Pavithra",
    "Shreevarshaa",
    "Nandhana",
  ];
  const teamLeader = ["Team Leaders", "Abirami", "Muralidharan", "Sasi"];
  const handleChange = (e) => {
    setFirst(e.target.value);
  };
  return (
    <div>
      <h1 className="text-blue-800  text-center p-4 rounded-xl w-full sm:w-[96%] mx-auto font-black font-sans text-2xl">
        Add New Task
      </h1>
      <div className="container mx-auto w-full sm:w-[96%] px-2 border drop-shadow-2xl shadow-2xl mt-5 rounded-xl">
        <form>
          <input
            type="text"
            required
            placeholder="Task Name.."
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />
          <textarea
            type="text"
            required
            placeholder="Task Description.."
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-4 lg:mt-4 rounded-md py-2"
          />
          <h1 className="block my-1 text-sm mt-4 lg:mt-4">Start Date:</h1>
          <input
            type="date"
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-2 lg:mt-2 rounded-md py-2"
          />
          <h1 className="block my-1 text-sm mt-4 lg:mt-4">End Date:</h1>
          <input
            type="date"
            required
            className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 transition duration-300 ease-in-out px-2  placeholder-gray-500 block mt-2 lg:mt-2 rounded-md py-2"
          />
          <label
            htmlFor="assigned type"
            required
            className="block my-1 text-sm mt-4 lg:mt-4"
          >
            Assigned Type:
          </label>
          <div className="flex items-center mt-2 lg:mt-2 ">
            <input
              className="mr-2"
              required
              type="radio"
              id="TL"
              name="assignedType"
              value="TL"
              onChange={handleChange}
            />
            <label className="text-sm" htmlFor="TL">
              Team Leader
            </label>
            <input
              className="ml-4 mr-2"
              type="radio"
              id="Member"
              name="assignedType"
              value="Member"
              onChange={handleChange}
            />
            <label className="text-sm" htmlFor="Member">
              Member
            </label>
          </div>
          <select
            name="assignedType"
            id=""
            className="gap-x-1.5 rounded-md bg-white px-1 mt-3 lg:mt-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {first === "Member"
              ? teamMembers?.map((member) => (
                  <option key={member} value={member}>
                    {member}
                  </option>
                ))
              : teamLeader?.map((leader) => (
                  <option key={leader} value={leader}>
                    {leader}
                  </option>
                ))}
          </select>
          <button
            type="submit"
            className="transition duration-100 ease-in-out delay-50 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 text-white px-4 py-2 rounded-xl mt-4 lg:mt-4 mb-4 lg:mb-4 block mx-auto"
          >
            <Link href={"/managerdashboard"}>ADD</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
