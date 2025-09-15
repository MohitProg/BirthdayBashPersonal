"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { IoChevronBackSharp } from 'react-icons/io5';
const Back = () => {
      const router = useRouter();
  return (
 <button onClick={() => router.back()}>

<IoChevronBackSharp  size={18}/>
    </button>
  )
}

export default Back
