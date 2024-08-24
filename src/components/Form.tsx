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
import { Label } from "@/components/ui/label";
import { cn } from "../../utils";

export function Form({
  triggerName,
  className,
}: {
  triggerName: string;
  className?: string;
}) {
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Register Now!</DialogTitle>
          <DialogDescription>
            Enter your data to secure your spot!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" className="col-span-2" placeholder="Full Name" />
            <Input id="email" className="col-span-2" placeholder="Email" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="contact"
              className="col-span-2"
              placeholder="Contact No"
            />
            <Input id="college" className="col-span-2" placeholder="College" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="branch" className="col-span-2" placeholder="Branch" />
            <Input id="year" className="col-span-2" placeholder="Year" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
