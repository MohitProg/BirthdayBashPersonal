import Back from "@/components/UiComponents/Back";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const page = () => {
  return (
    <div className="w-full p-3 space-y-3">
      <div className="flex items-center gap-3">
        <Back /> <span>Edit Your Profile</span>
      </div>

      <Card className=" shadow-none rounded-none">
        <CardHeader>
          <CardTitle className="hidden">Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="space-y-4">
            <div className="flex items-center justify-center ">
              <Avatar className="h-32 w-32">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <Label>Name</Label>
              <Input placeholder="Enter Your Name" />
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <Label>Email</Label>
              <Input placeholder="Enter Your Name" />
            </div>
            <div className="flex flex-col items-start gap-2 ">
              <Label>Date of Birth</Label>
              <Input type="date" placeholder="Enter Your Name" />
            </div>

            <div className="flex items-center justify-end ">
              <Button className="commonbtn">Update</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
