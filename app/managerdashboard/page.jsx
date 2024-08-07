"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ManagerDashboardImage from "../../public/image13.jpg";
const ManagerDashboard = () => {
  const table = [
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
    { tasks: "Empty", responsible: "Empty", status: "Empty" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8   sm:max-w-screen-md rounded-xl p-2 ]">
      <h1 className="text-blue-800  text-center mx-auto rounded-xl w-full sm:w-[96%] font-black font-sans text-2xl">
        Task Management Status
      </h1>
      <div className="flex justify-end relative lg:mr-[20%] inline-block text-right  sm:mx-auto w-full sm:w-auto">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            type="button"
            className="flex w-full justify-end gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700  ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            Options
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <div
              className={`absolute right-10 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1">
                <Link href="/managerdashboard/addTL" legacyBehavior>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Add Team Leader/Manager
                  </a>
                </Link>
                <Link href="/managerdashboard/addTask" legacyBehavior>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Add Task
                  </a>
                </Link>
                <Link href="/managerdashboard/addTM" legacyBehavior>
                  <a
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    Add Team Member
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-2 mt-2 lg:mt-2 container mx-auto  sm:w-[90%] border drop-shadow-2xl shadow-2xl rounded-xl">
        <div className="overflow-auto max-h-96 border border-gray-300 rounded-lg w-[100%]">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="table-auto sticky top-0 bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Tasks
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Responsible
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.map((data, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {data.tasks}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {data.responsible}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm sm:px-6">
                    {data.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        <div className="hidden lg:block  bg-no-repeat bg-right lg:h-screen bg-cover lg:w-[50%]">
          <Image
            src={ManagerDashboardImage}
            alt="Login"
            width={0}
            height={0}
            className="rounded-xl"
          />
        </div>
    </div>
  );
};

export default ManagerDashboard;
