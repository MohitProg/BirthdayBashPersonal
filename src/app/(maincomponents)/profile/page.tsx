import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuPencil } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import PostCard from "../home/(components)/PostCard";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="bg-main-bg min-h-screen relative ">
        <div className=" h-36 bg-white py-2 border-b-2 relative">
          <Image
            src={"/images/main1.jpg"}
            objectFit="cover"
            fill
            alt="please wait"
          />
        </div>

        <div className="py-2 bg-white space-y-1">
          <div className="   flex items-center p-2 gap-5  bottom-1 left-0 right-0">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex-1/2 leading-tight">
              <span className="font-semibold">Mohit Sharma</span>
              <p className="text-gray-500">mohit@gmail.com</p>
            </div>

            <div className=" flex-1/2 flex items-center justify-center">
              <Link href={"/profile/edit/7324623"} className="commonbtn rounded-full">
                <LuPencil size={20} />
              </Link>
            </div>
          </div>

          <div className="flex   items-center p-2 gap-2">
            <span className="text-md font-semibold">Well Wishers</span>
            <span className="text-btn-main font-semibold">23K</span>
          </div>

          <div className="px-2 flex  items-center gap-2 ">
            <Button className="commonbtn">Wish</Button>
            <Button className="commonbtn">UnWish</Button>
          </div>
        </div>

        <Separator />

        <div className="p-2">
          <span className="font-semibold text-gray-500">Total Post -10</span>

          <div className="space-y-4 py-2">
            <PostCard />
            <PostCard />

            <PostCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
