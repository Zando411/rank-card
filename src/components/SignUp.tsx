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
import { Mail, Loader2 } from "lucide-react"

export function SignUpDialogComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [submissionError, setSubmissionError] = useState<boolean>(false)


  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent form submission from refreshing the page
    setIsLoading(true)

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setIsDialogOpen(false) // Close dialog on successful signup
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsLoading(true);

    try{
        await signInWithPopup(auth, googleProvider);
        setIsDialogOpen(false) // Close dialog on successful signup
    } catch (err) {
        console.error(err);
    } finally {
      setIsLoading(false)
    }
};

const handleDialogChange = (open: boolean) => {
  // Prevent closing the dialog if still loading
  if (!isLoading) {
    setIsDialogOpen(open)
  }
}

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsDialogOpen(true)}>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Sign Up</DialogTitle>
          <DialogDescription>
            Create a new account using an email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignUp}>
          <div className="grid gap-4 mb-4 scroll-m-20">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <Button type="submit" className=""disabled={isLoading}>
            {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
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
          
          <Button type="button" variant="outline" onClick={handleGoogleSignUp} className="w-full" disabled={isLoading}>
          {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
              Sign Up with Google
            </Button>
            

          <DialogFooter className="flex flex-col items-stretch sm:items-center">
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}