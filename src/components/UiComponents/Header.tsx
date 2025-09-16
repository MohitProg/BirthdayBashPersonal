import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideMenu from "@/components/UiComponents/SideMenu";
const Header = () => {
  return (
     <div className="p-2 bg-white shadow-sm  z-50 flex items-center gap-2  ">
          <div className="flex items-center gap-2 flex-1">
            <div className="flex flex-col  items-center justify-center">
              <IoAddCircleOutline size={40} className="text-btn-main" />
              <span className="text-xs">Add Status</span>
            </div>

            <Avatar className="h-14 w-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="h-14 w-14">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <SideMenu />
          </div>
        </div>
  )
}

export default Header
