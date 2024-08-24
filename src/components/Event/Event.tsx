import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import HostedLine from "./HostedLine";
import BannerCard from "./BannerCard";
import AboutEvent from "./AboutEvent";

function Event() {
  return (
    <main className="w-full flex justify-center  bg-primaryGreen min-h-[700px] mt-12">
      <MaxWidthWrapper className="items-center flex-col my-10">
        <HostedLine />
        <BannerCard />
        <AboutEvent />
      </MaxWidthWrapper>
    </main>
  );
}

export default Event;
