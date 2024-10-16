"use client";
import Navbar from "@/components/Nav";
import SignUpCard from "@/components/SignUpCard";

export default function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-start p-16 items-center min-h-full">
        <SignUpCard />
      </div>
    </div>
  );
}
