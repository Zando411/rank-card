import React from "react";
import { Button } from "../components/ui/button";
import { SignOut } from "../components/SignOut";
import Navbar from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center min-h-screen bg-background">
        <h1>Welcome to RankCard</h1>
        <p>Create your gamer profile and share your ranks!</p>
      </div>
    </div>
  );
}
