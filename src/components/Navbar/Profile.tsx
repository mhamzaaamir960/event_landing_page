import React from "react";
import Image from "next/image";
import image from "@/assets/image.jpg";

function Profile() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={image}
        alt="Image"
        priority={true}
        width={25}
        height={25}
        className="sm:w-[35px] sm:h-[35px]  rounded-full cursor-pointer ring-1 ring-offset-1 ring-hexColor"
      />
    </div>
  );
}

export default Profile;
