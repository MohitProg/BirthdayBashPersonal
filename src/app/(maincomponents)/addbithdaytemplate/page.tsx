import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IoIosArrowBack } from "react-icons/io";

import BirthdayPost from "./(Components)/BirthdayPost";
import AddBithday from "./(Components)/AddBithday";
import Back from "@/components/UiComponents/Back";

const page = () => {
  return (
    <div className=" relative py-2 ">
      <Tabs defaultValue="account" className=" p-1 ">
        <TabsList className="w-full  py-6">
          <Back />

          <TabsTrigger className="h-10 ml-4 " value="account">
            Add BirthdayPost
          </TabsTrigger>
          <TabsTrigger value="password" className="h-10 ml-4 ">
            Add Birthday
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="py-4">
          <BirthdayPost />
        </TabsContent>
        <TabsContent value="password" className="py-4">
          <AddBithday />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
