import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuSend } from "react-icons/lu";

type linksType = {
  title: string;
  link: string;
  icon: IconType;
};

function NavLinks() {
  const links: linksType[] = [
    {
      title: "Events",
      link: "/",
      icon: MdOutlineEventAvailable,
    },
    {
      title: "Speakers",
      link: "/speakers",
      icon: LiaChalkboardTeacherSolid,
    },
    {
      title: "Schedule",
      link: "/schedule",
      icon: RiCalendarScheduleLine,
    },
    {
      title: "Register",
      link: "/register",
      icon: LuSend,
    },
  ];
  return (
    <div className="flex gapx-x-2 sm:gap-x-4 items-center">
      {links &&
        links.map((link: linksType) => (
          <Link
            href={link.link}
            key={link.title}
            className=" px-2 py-1 rounded-md  sm:hover:bg-secondaryGreen sm:hover:text-white transition-all duration-200 delay-75 ease-in-out text-hexColor flex sm:gap-x-2 items-center group"
          >
            <link.icon className="text-xl text-hexColor hover:text-gray-500 sm:group-hover:text-white transition-all duration-200 delay-75 ease-in-out" />{" "}
            <span className="hidden sm:block">{link.title}</span>
          </Link>
        ))}
    </div>
  );
}

export default NavLinks;
