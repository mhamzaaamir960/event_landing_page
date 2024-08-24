import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import HostedLine from "./HostedLine";
import BannerCard from "./BannerCard";

function Event() {
  return (
    <main className="w-full flex justify-center  bg-primaryGreen min-h-[700px] mt-12">
      <MaxWidthWrapper className="items-center flex-col mt-8">
        <HostedLine />
        <BannerCard />
      </MaxWidthWrapper>
    </main>
  );
}

export default Event;
