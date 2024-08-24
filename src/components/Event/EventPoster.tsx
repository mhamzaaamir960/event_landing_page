import React from "react";
import Image from "next/image";
import poster from "@/assets/poster.png";

function EventPoster() {
  return (
    <div className="px-6 py-4 flex justify-center items-center w-[400px]">
      <Image
        src={poster}
        alt="Event Poster"
        width={200}
        height={200}
        priority={true}
        className="object-fill border border-white rounded-md md:w-[350px] md:h-[350px] lg:w-[300px] lg:h-[300px]"
      />
    </div>
  );
}

export default EventPoster;
