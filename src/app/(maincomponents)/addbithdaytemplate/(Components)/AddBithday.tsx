import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import React from "react";

const AddBithday = () => {
  return (
    <Card>
      <CardHeader className="px-2">
        <CardTitle>Add User Birthday</CardTitle>
      </CardHeader>
      <CardContent className=" px-2">
        <form className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input placeholder="Enter the Name" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Date Of Birth</Label>
            <Input type="date" />
          </div>

          <div className="flex items-center gap-2">
            <Label>Email Alert</Label>
            <Switch />
          </div>

          <div className="flex items-center  justify-end  mt-3">
            <Button className="commonbtn">Add Birthday</Button>
          </div>


        </form>
      </CardContent>
    </Card>
  );
};

export default AddBithday;
