import React from "react";
import MaxWidthWrapper from "../ReuseableComponents/MaxWidthWrapper";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Profile from "./Profile";

function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center h-[60px] bg-primaryGreen/85 backdrop-blur-sm fixed top-0 z-20">
      <MaxWidthWrapper className=" justify-between items-center">
        <Logo />
        <NavLinks />
        <Profile />
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
