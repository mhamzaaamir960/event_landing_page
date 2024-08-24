import React from "react";
import Image from "next/image";
import poster from "@/assets/poster.png";

function EventPoster() {
  return (
    <div className="">
      <Image
        src={poster}
        alt="Event Poster"
        width={200}
        height={200}
        priority={true}
        className="w-[400px] h-auto rounded-md border border-white"
      />
    </div>
  );
}

export default EventPoster;
