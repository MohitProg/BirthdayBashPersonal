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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const AddBirthdayofuser = () => {
  return (
    <Card>
      <CardHeader className="px-2">
        <CardTitle className="">Add User Birthday</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <form action="flex flex-col gap-3 ">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input placeholder="Enter the Name" />
          </div>
          <div className="">
            <Label>Date Of Birth</Label>
            <Input type="date" placeholder="Enter the Name" />
          </div>

          <div className=" flex items-center  gap-2">
            <Label>Email Alert</Label>
            <Switch />
          </div>
        </form>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default AddBirthdayofuser;
