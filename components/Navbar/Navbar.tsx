"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href='/' className="flex flex-center gap-2">
        <Image src="/assets/images/logo.svg" alt='logo' width={32} height={32}/>
      </Link>
    </nav> 
  )
}

export default Navbar