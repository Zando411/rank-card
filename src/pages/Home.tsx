import React from "react";
import { Button } from "../components/ui/button";
import { SignOut } from "../components/SignOut";

const Home: React.FC = () => {
  return (
    <div className="text-center min-h-screen bg-background">
      <h1>Welcome to RankCard</h1>
      <p>Create your gamer profile and share your ranks!</p>
      <Button variant="secondary">Click me to Sign in!</Button>

      <SignOut />
    </div>
  );
};

export default Home;
