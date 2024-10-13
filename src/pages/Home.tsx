import React from "react";
import { Button } from "../components/ui/button";
import { SignUpDialogComponent } from "./SignUp";
import { CardWithForm } from "../components/CardTest";
import { SignOut } from "../components/SignOut";

const Home: React.FC = () => {
  return (
    <div className="text-center min-h-screen bg-background">
      <h1>Welcome to RankCard</h1>
      <p>Create your gamer profile and share your ranks!</p>
      <SignUpDialogComponent />

      <Button variant="secondary">Click me to Sign in!</Button>

      <SignOut />
      <CardWithForm />
    </div>
  );
};

export default Home;
