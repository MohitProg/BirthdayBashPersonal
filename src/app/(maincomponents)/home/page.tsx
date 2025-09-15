import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import PostCard from "./(components)/PostCard";
import MenuTab from "./(components)/MenuTab";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import SideMenu from "@/components/UiComponents/SideMenu";

const page = () => {
  return (
    <>
      <main className="bg-main-bg min-h-screen relative">
        <div className="p-2 bg-white shadow-sm sticky top-0 left-0 right-0 z-50 flex items-center gap-2  ">
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
            <SideMenu/>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-2 p-1 "></div>
        {/* // post section */}

        <div className="px-2 ">
          <PostCard />
          <PostCard />
          <PostCard />

          <PostCard />
          <PostCard />
        </div>
      </main>
    </>
  );
};

export default page;
