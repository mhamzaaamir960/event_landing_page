import React from "react";
import EventPoster from "./EventPoster";
import EventMetaData from "./EventMetaData";

function BannerCard() {
  return (
    <div className="bg-secondaryGreen w-full  max-w-[450px] md:max-w-[800px] rounded-md flex flex-col  md:flex-row justify-between items-center p-4 gap-5 mt-5 ">
      <EventPoster />
      <EventMetaData />
    </div>
  );
}

export default BannerCard;
