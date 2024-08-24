import React, { ReactNode } from "react";
import { cn } from "../../../utils";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-w-[350px] w-full max-w-[90rem]  flex  px-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
