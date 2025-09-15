import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoFilterSharp } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import Message from "./(components)/Message";
import Back from "@/components/UiComponents/Back";

const page = () => {
  return (
    <section className="bg-main-bg min-h-screen relative ">
      <div className="sticky bg-white top-0 left-0 bottom-0 p-2">
          <div className='flex items-center'>
<Back/>
      <div className='text-center flex-1 text-md font-semibold'>Messages</div>
      </div>
        <div className="flex items-center mt-4 justify-between gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <Input
              type="search"
              className="rounded-full w-full"
              placeholder="Search message"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoFilterSharp size={22} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Apply Filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Read Message</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className="" />

      <div className="">
        <Message/>
          <Message/>
            <Message/>
              <Message/>
       
      </div>
    </section>
  );
};

export default page;
