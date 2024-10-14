"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, googleProvider } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { SiGooglecloud } from "@icons-pack/react-simple-icons";
import { getUserAuthErrorMessage } from "@/lib/authFunctions";

export default function SignUpCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSignUpError, setIsSignUpError] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful signup (e.g., redirect or show success message)
    } catch (err) {
      console.error(err);
      setIsSignUpError(true);
      setSignUpError(getUserAuthErrorMessage((err as Error).message));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      // Handle successful signup (e.g., redirect or show success message)
    } catch (err) {
      console.error(err);
      setIsSignUpError(true);
      setSignUpError(getUserAuthErrorMessage((err as Error).message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-[450px]">
      <CardHeader>
        <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Sign Up
        </CardTitle>
        <CardDescription>Create a new account using an email.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp} noValidate>
          <div className="grid gap-4 mb-4 scroll-m-20">
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="email" className="text-left">
                Email:
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-2">
              <Label htmlFor="password" className="text-left">
                Password:
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p
              className={`text-right text-destructive ${isSignUpError ? "" : "hidden"}`}
            >
              {signUpError}
            </p>

            <p className="text-right">
              Already have an account?{" "}
              <span className="text-primary">Sign in here</span>
            </p>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up with Email
            </Button>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignUp}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <SiGooglecloud className="mr-2 h-4 w-4" />
            )}{" "}
            Google
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch sm:items-center"></CardFooter>
    </Card>
  );
}
