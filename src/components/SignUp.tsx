"'use client'"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth, googleProvider } from '@/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export function SignUpDialogComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleSignUp = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // Handle sign up logic here
  //   console.log("Sign up with:", email, password)
  // }

  const handleSignUp = async () => {
    try{
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
    }
};

  // const handleGoogleSignUp = () => {
  //   // Handle Google sign up logic here
  //   console.log("Sign up with Google")
  // }

  const handleGoogleSignUp = async () => {
    try{
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);
    }
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>
            Create a new account or sign up with Google.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignUp}>
          <div className="grid py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter className="flex flex-col items-stretch sm:items-center">
            <Button type="submit" className="mb-2">Sign Up</Button>
            <Button type="button" variant="outline" onClick={handleGoogleSignUp} className="w-full">
              Sign Up with Google
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}