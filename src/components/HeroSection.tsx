'use client'

import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"
import React, { useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { cn } from "@/utils/cn"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FormEvent } from 'react'
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react"

function HeroSection() {
  const [email, setEmail] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        
          notify();
        console.log('Email submitted successfully')
    } else {
        console.error('Error submitting email:', response.status)
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    }
  }
  const notify = () => toast("Email submitted successfully");
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-16 md:py-0">
              <ToastContainer/>
              <div className=" text-white -top-40 left-0 md:left-60 md:-top-20 font-bold  text-2xl italic">
                Geeky Digest
              </div>
      <div className="p-4 relative z-10 w-full text-center">
              
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
        <h1 className="mt-40 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Explore the latest technical blogs
        </h1>
        <p className="text-white mt-10">
          This website aim is to provide you, up to date latest technical blog published my companies like Microsoft , JP
          morgan , Intuit and many more in future ...
        </p>
        <div className="mt-4 font-bold">
          <form className="flex flex-row justify-center items-center mt-4" onSubmit={handleSubmit}>
            <LabelInputContainer>
              
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>
            <Button type="submit" borderRadius="1.75rem">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

const LabelInputContainer = ({ children, className, }: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn("flex flex-col space-y-2 ", className)}>
      {children}
    </div>
  )
}