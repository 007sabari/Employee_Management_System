import Link from "next/link";
import { Favorite } from "@mui/icons-material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="text-center p-4 lg:w-[50%]">
        <h1 className="text-black text-center rounded-xl p-3  w-full text-2xl md:text-4xl font-black font-sans lg:ml-[5%] lg:mt-[5%]">
          Employee Management System
        </h1>
        <p className="first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-bold first-letter:text-black first-letter:mr-4 first-letter:float-left text-justify  my-2 text-base md:text-lg lg:ml-[10%] lg:mt-[5%]">
          Welcome to our Employee Management System! This platform is primarily
          used for registering employees, streamlining the process of adding new
          team members to your organization.
        </p>
        <p className="text-justify my-2 text-base md:text-lg  lg:mx-left lg:ml-[10%] lg:mt-[4%]">
          This platform is designed to help you streamline the process of
          registering new team members, reducing the time and effort required
          for hiring and onboarding employees.
        </p>
        <p className="text-justify my-2 text-base md:text-lg  lg:mx-left lg:ml-[10%] lg:mt-[4%]">
          It offers easy and efficient tools for Managers, Team Leads, and
          Employees to manage and access essential information. Explore the
          system to make employee registration and management seamless and
          straightforward.
        </p>
        <p className="my-4 text-base md:text-lg mx-auto lg:mt-[5%]">
          Click "Welcome"button to login
        </p>
        <Link
          href="/login"
          className="transition ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl px-6 py-3 text-white flex  justify-center mx-auto w-[28%] lg:mt-[5%]"
        >
          Welcome
          <Favorite />
        </Link>
      </div>
      <div
        className="hidden lg:block  bg-no-repeat bg-right lg:h-screen bg-cover lg:w-[50%]"
        style={{ backgroundImage: "url('/image3.png')" }}
      ></div>
    </div>
  );
}
