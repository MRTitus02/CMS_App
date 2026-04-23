"use client";

import { Icons } from "@/components/Icons";
import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner"

export default function SignIn() {
    const handleSignIn = async() => {
        try {
            await signIn('google')
        } catch (error) {
            console.error(error.message);
            toast.error("Uh No! Something went wrong.")
        }
    };
  return (
    <section className="flex h-screen w-full justify-center items-center">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-6 items-center bg-gray-500/10 p-6 rounded-md">
        <Anvil className="text-gray-600 size-16"/>
        <p className="text-sm text-center">Welcome, By continuing to use our services, you agree to our Terms of Service and Privacy Policy.</p>
        <button onClick={handleSignIn} className="flex gap-4 items-center border-black border-2 rounded px-3 py-0.5 text-lg font-bold bg-gray-900/50 hover:bg-gray-200 duration-200"> <Icons.GoogleIcon className="size-8" /> Sign In</button>
      </div>
    </section>
  );
}