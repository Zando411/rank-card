import React from "react";
import { Button } from "./ui/button";
import { logout } from "../lib/authFunctions";

export const SignOut: React.FC = () => {
  return (
    <div>
      <Button onClick={logout}>Sign out</Button>
    </div>
  );
};
