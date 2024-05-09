import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Loader, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

enum WaitlistButtonStatus {
  DEFAULT = "default",
  PENDING = "pending",
  SUCCESS = "success",
}

export default function WaitlistInput() {
  const [status, setStatus] = useState<WaitlistButtonStatus>(WaitlistButtonStatus.DEFAULT);
  const [email, setEmail] = useState<string>("");

  function validateEmail(email: string) {
    if (!email || email === "") return false;
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (status !== WaitlistButtonStatus.DEFAULT) return;

    // Email validation
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setStatus(WaitlistButtonStatus.PENDING);
    setEmail("");

    // Post data to lambda
    axios
      .post(import.meta.env.VITE_LAMBDA_URL, {
        email: email,
      })
      .then(() => {
        setStatus(WaitlistButtonStatus.SUCCESS);
        toast("🎉 You've been added to the waitlist!");
      })
      .catch(() => {
        setStatus(WaitlistButtonStatus.DEFAULT);
        toast.error("An error occurred. Please try again later.");
      });
  }

  return (
    <form className="relative flex h-12 w-full max-w-md place-content-center place-items-center">
      <Button
        className={cn("absolute right-1 z-10 w-32 rounded-full transition-all", {
          "w-12": status !== WaitlistButtonStatus.DEFAULT,
          "cursor-default": status !== WaitlistButtonStatus.DEFAULT,
          "bg-jz-green hover:bg-jz-green": status === WaitlistButtonStatus.SUCCESS,
        })}
        disabled={status === WaitlistButtonStatus.PENDING}
        onClick={handleSubmit}>
        <span
          className={cn({
            hidden: status !== WaitlistButtonStatus.DEFAULT,
          })}>
          Join Waitlist
        </span>
        <Loader
          className={cn("h-4 w-4 animate-spin", {
            hidden: status !== WaitlistButtonStatus.PENDING,
          })}
        />
        <Check
          className={cn("h-4 w-4", {
            hidden: status !== WaitlistButtonStatus.SUCCESS,
          })}
        />
      </Button>
      <Input
        className="absolute h-12 w-full pl-4 pr-32 placeholder-white"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
}
