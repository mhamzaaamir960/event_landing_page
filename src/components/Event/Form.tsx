"use client";
import axios from "axios";
import "./loader.css";
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
import { ChangeEvent, FormEvent, useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const register = {
      Name: data.name,
      Email: data.email,
      "Contact No": data.contact,
      College: data.college,
      Branch: data.branch,
      Year: data.year,
    };
    try {
      setError(false);
      setIsSubmitting(true);
      const response = await axios.post(
        "https://sheetdb.io/api/v1/l61zex6ageojm",
        register
      );
      if (!response) {
        throw new Error("Something went wrong!");
      }

      setData({
        name: "",
        email: "",
        contact: "",
        college: "",
        branch: "",
        year: "",
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            `text-xl font-medium bg-white h-fit px-10  rounded-md hover:bg-white/80 transition-all duration-200 delay-75 ease-in-out`,
            className
          )}
        >
          {triggerName}
        </button>
      </DialogTrigger>{" "}
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
              name="name"
              type="text"
              className="col-span-4 sm:col-span-2"
              placeholder="Full Name*"
              value={data.name}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
            <Input
              id="email"
              name="email"
              type="email"
              className="col-span-4 sm:col-span-2"
              placeholder="Email*"
              value={data.email}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="contact"
              name="contact"
              type="tel"
              className="col-span-4 sm:col-span-2"
              placeholder="Contact No*"
              value={data.contact}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
            <Input
              id="college"
              name="college"
              type="text"
              className="col-span-4 sm:col-span-2"
              placeholder="College*"
              value={data.college}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="text"
              id="branch"
              name="branch"
              className="col-span-4 sm:col-span-2"
              placeholder="Branch*"
              value={data.branch}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
            <Input
              type="text"
              id="year"
              name="year"
              className="col-span-4 sm:col-span-2"
              placeholder="Year*"
              value={data.year}
              required={true}
              disabled={isSubmitting}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <div>
            {isSubmitted && (
              <p className="text-start text-green-500">
                Message sent successfully!
              </p>
            )}
          </div>
          <div>
            {error && (
              <p className="text-start text-red-500">Something went wrong!</p>
            )}
          </div>
          <button
            className="px-6 py-2 rounded-md bg-black text-white hover:bg-black/90"
            onClick={handleSubmit}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <div className="loader" /> : <span>Send</span>}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
