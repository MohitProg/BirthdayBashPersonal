import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBirthdayCake } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

import { BsThreeDotsVertical } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const PostCard = () => {
  return (
    <>
      <Card className="mb-4 py-1">
        <CardHeader className="flex gap-5 items-center justify-between p-2 py-1 ">
          <div className="flex gap-5 items-center ">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Mohit Sharma</CardTitle>
              <CardDescription>Birth : 5 Aug 2024</CardDescription>
            </div>
          </div>

          <div className=" flex items-center justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDotsVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Manage Post</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Save Post</DropdownMenuItem>
                <DropdownMenuItem>Delete Post</DropdownMenuItem>
                <DropdownMenuItem>Block Post</DropdownMenuItem>
                <DropdownMenuItem>Share Post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="relative h-80 ">
          <p>this is greeting message</p>
          <Image
            alt="image loading"
            className="object-cover"
            fill
            src={"/images/main1.jpg"}
          />
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-5 py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">5 cake</span>
            <FaBirthdayCake size={18} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm"> 2 wishes</span>
            <TbJewishStar size={20} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">2 Gift Send</span>
            <CiDeliveryTruck size={20} />
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
