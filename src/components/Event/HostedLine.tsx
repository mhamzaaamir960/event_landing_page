import React from "react";
import Image from "next/image";
import Link from "next/link";
import soarxLogo from "@/assets/soarxlogo.png";

function HostedLine() {
  return (
    <div className="flex items-center gap-x-2 text-xl italic h-fit animate-pulse hover:animate-none">
      <span>Hosted by</span>
      <Link
        href={"https://soarx.tech"}
        target="_blank"
        className="flex items-center gap-x-1"
      >
        <Image
          src={soarxLogo}
          alt="SoarX Logo"
          width={25}
          height={25}
          className="rounded-full w-[25px] h-[25px] border border-solid border-hexColor"
        />
        <span className="font-medium hover:font-semibold transition-all duration-75 delay-75 ease-in-out">
          SoarX
        </span>
      </Link>
    </div>
  );
}

export default HostedLine;
