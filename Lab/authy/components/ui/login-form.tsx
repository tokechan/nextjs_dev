"use client"
import { signIn } from "next-auth/react"
import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";
 
export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const credentialsAction = async(formData: FormData) => {
    const result = await signIn("credentials", {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: true,
      callbackUrl: '/',
    });

    if (result?.error) {
      setError('Invalid credentials');
    }
  };
 
  return (
    <form action={credentialsAction}>
      <div className="space-y-4">
       <label htmlFor="username" 
        className="sr-only">
         Username
        </label>
        <Input 
        type="text" 
        id="username" 
        name="username" 
        required
        className="w-full p-2 rounded-md border
        border-gray-200 
        focus: border-barand-secondary
        focus: ring-2
        focus: ring-brand-secondary/20
        outline-none transition-all
        bg-gray-50"
        placeholder="Username"
        />
        
      <label htmlFor="password" className="sr-only">
        Password
      </label>
        <Input 
        type="password" 
        id="password" 
        name="password" 
        required
        className="w-full p-2 rounded-md border
        border-gray-200 
        focus: border-barand-secondary
        focus: ring-2
        focus: ring-brand-secondary/20
        outline-none transition-all
        bg-gray-50"
        placeholder="Password"
        />
      </div> 
      {error && <p>{error}</p>}
      <Button 
      type="submit" 
      className="w-full
      bg-brand-primary
      text-gray-900
      hover:bg-brand-primary90"
      >
        Sign in</Button>
    </form>
    
  )
}