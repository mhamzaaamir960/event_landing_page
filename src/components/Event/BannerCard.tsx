import React from "react";
import EventPoster from "./EventPoster";
import EventMetaData from "./EventMetaData";

function BannerCard() {
  return (
    <div className=" flex items-center justify-center bg-secondaryGreen mt-5  lg:max-w-[80%] min-h-[350px] rounded-md ">
      <EventPoster />
      <EventMetaData />
    </div>
  );
}

export default BannerCard;
