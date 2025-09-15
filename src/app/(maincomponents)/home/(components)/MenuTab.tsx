"use client"
import React from 'react'
import { RxHome } from "react-icons/rx";
import { BsChatSquareDotsFill } from "react-icons/bs";

import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import AddBithdayPost from '@/components/UiComponents/AddBithdayPost';
import Link from 'next/link';
const MenuTab = () => {
    const pathname=usePathname();
    console.log("pathname",pathname)
  return (
 
        <div className="sticky flex items-center  bg-white py-3 px-2  justify-around bottom-0 left-0 right-0 ">
          <Link href={"/home"} className={`flex items-center  justify-center flex-col ${pathname==="/home"?"text-icon":"text-gray-400"}`}>
            <RxHome size={18}  />
            <span className="text-xs">Home</span>
          </Link>

          <Link href={"/messages"}  className={`flex items-center  justify-center flex-col ${pathname==="/messages"?"text-icon":"text-gray-400"}`}>
            <BsChatSquareDotsFill size={18} />
            <span className="text-xs">Wishes</span>
          </Link>
          {/* <div className="flex items-center justify-center flex-col">
            <FaPlus size={18} />
            <span className="text-xs">Add Post</span>
          </div> */}

          <AddBithdayPost />

          <Link href={"/notifications"} className={`flex items-center  justify-center flex-col ${pathname==="/notification"?"text-icon":"text-gray-400"}`}>
            <BsFillBellFill size={18} />
            <span className="text-xs">Notifications</span>
          </Link>
          <Link href={"/profile"} className={`flex items-center  justify-center flex-col ${pathname==="/profile"?"text-icon":"text-gray-400"}`}>
            <CgProfile size={18} />
            <span className="text-xs">Profuke</span>
          </Link>
        </div>
  )
}

export default MenuTab
