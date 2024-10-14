"use client";
import Navbar from "@/components/Nav";
import SignInCard from "@/components/SignInCard";

export default function LogIn() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-start p-16 items-center min-h-full">
        <SignInCard />
      </div>
    </div>
  );
}
