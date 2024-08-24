"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "../../../utils";
import { ChangeEvent, useState } from "react";

type dataType = {
  name: string;
  email: string;
  contact: string;
  college: string;
  branch: string;
  year: string;
};

export function Form({
  triggerName,
  className,
}: {
  triggerName: string;
  className?: string;
}) {
  const [data, setData] = useState<dataType>({
    name: "",
    email: "",
    contact: "",
    college: "",
    branch: "",
    year: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData: dataType) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            `text-xl font-medium bg-white h-fit px-12  rounded-md`,
            className
          )}
        >
          {triggerName}
        </button>
      </DialogTrigger>
      <form>
        {" "}
        <DialogContent className="max-w-[300px] sm:max-w-[500px] rounded-md">
          <DialogHeader>
            <DialogTitle>Register Now!</DialogTitle>
            <DialogDescription>
              Enter your data to secure your spot!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                type="text"
                className="col-span-4 sm:col-span-2"
                placeholder="Full Name"
                value={data.name}
                required={true}
                onChange={handleChange}
              />
              <Input
                id="email"
                type="email"
                className="col-span-4 sm:col-span-2"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="contact"
                type="tel"
                className="col-span-4 sm:col-span-2"
                placeholder="Contact No"
                value={data.contact}
                onChange={handleChange}
              />
              <Input
                id="college"
                type="text"
                className="col-span-4 sm:col-span-2"
                placeholder="College"
                value={data.college}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                type="text"
                id="branch"
                className="col-span-4 sm:col-span-2"
                placeholder="Branch"
                value={data.branch}
                onChange={handleChange}
              />
              <Input
                type="text"
                id="year"
                className="col-span-4 sm:col-span-2"
                placeholder="Year"
                value={data.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
