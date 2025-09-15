import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import PostCard from "./(components)/PostCard";
import MenuTab from "./(components)/MenuTab";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";


const page = () => {
  return (
    <>
      <main className="bg-main-bg min-h-screen relative">
        <div className="p-2 bg-white shadow-sm sticky top-0 left-0 right-0 z-[999] flex items-center gap-2  ">
          
          <button className="flex items-center justify-between gap-2 trending">
            <IoAddCircleOutline  size={20}  /> Add Birthday
          </button>

           <button className="flex items-center justify-between gap-2 trending">
            <FaEye color="#ffffff" /> View Birthday List
          </button>
            {/* <span className="trending">
            Trending
          </span>
          <span className="trending ">
            New
          </span>
          <span className="trending">
            Yours
          </span> */}

          {/* <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
{/* 
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </div>
        <Separator />
        <div className="flex items-center gap-2 p-1 ">
    
        </div>
        {/* // post section */}

        <div className="px-2 ">
          <PostCard />
          <PostCard />
        </div>

      

      </main>
    </>
  );
};

export default page;
