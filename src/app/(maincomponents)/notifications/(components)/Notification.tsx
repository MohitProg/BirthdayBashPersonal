import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Notification = () => {
  return (
    <>
      <div className="flex p-2 py-3 mb-1 bg-white rounded-lg items-center  gap-3 justify-between">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex items-center justify-star flex-1 mt-4">
          <div className="leading-tight">
            <span className="text-md">Appotment Cancell</span>
            <p className="text-xs">Today 12:30</p>
          </div>
        </div>

        <div className="h-full ">
          <span className="text-xs">10:10 AM</span>
        </div>
      </div>
    </>
  );
};

export default Notification;
