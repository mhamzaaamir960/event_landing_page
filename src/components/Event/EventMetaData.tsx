import React from "react";
import Image from "next/image";
import calendar from "@/assets/calendar.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import CountdownTimer from "./Timer";
import { Form } from "../ReuseableComponents/Form";

function EventMetaData() {
  return (
    <div>
      {/* Event Title */}
      <h2 className="text-white text-3xl font-bold">
        Want to win the Smart India Hackathon but have questions? ✨
      </h2>

      {/* Event Speaker */}
      <p className="font-light text-gray-100">
        Meet Sourav Bera a Solution Architect, Microsoft SIH 2020 Winner{" "}
      </p>

      {/* Date & Time of the event */}
      <div className="flex flex-wrap gap-4 justify-start md:justify-between items-center w-full my-4 px-4">
        <div className="flex items-center gap-x-2">
          <Image
            src={calendar}
            alt="Calendar Logo"
            width={40}
            height={40}
            className="w-[40px] h-[40px]"
            priority={true}
          />
          <div className="flex flex-col justify-center text-white ">
            <span>25, August, 2024</span>
            <span>6:00 PM to 7:00 PM IST</span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-x-3">
          <Link href={"https://soarx.tech"}>
            <AiOutlineGlobal className="text-2xl text-white" />
          </Link>
          <Link href={""}>
            <FaLinkedin className="text-2xl text-[#0A66C2]" />
          </Link>
          <Link href={""}>
            <FaInstagram className="bg-gradient-to-r from-[#FEDA77] via-[#DD2A7B] to-[#515BD4] rounded text-2xl text-white" />
          </Link>
          <Link href={""}>
            <FaXTwitter className="text-2xl text-black" />
          </Link>
          <Link href={""}>
            <FaYoutube className="text-2xl text-red-600" />
          </Link>
        </div>
      </div>

      {/* Register Button and timer */}
      <div className="min-h-[55px] max-h-[80px] h-full flex flex-wrap justify-around items-center bg-hexColor rounded-md">
        <Form triggerName="Register Now" />
        <CountdownTimer />
      </div>
    </div>
  );
}

export default EventMetaData;
