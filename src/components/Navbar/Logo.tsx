import React from "react";
import eventlogo from "@/assets/eventlogo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-center items-center select-none">
      <Image
        src={eventlogo}
        alt="Logo image"
        width={50}
        height={50}
        className="sm:w-[60px] sm:h-auto  select-none"
      />
    </div>
  );
}

export default Logo;
