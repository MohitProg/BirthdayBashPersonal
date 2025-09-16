import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BirthdayPost from "./(Components)/BirthdayPost";
import { IoIosArrowBack } from "react-icons/io";
import AddBirthdayofuser from "./(Components)/AddBirthdayofuser";

const page = () => {
  return (
    <div className=" relative py-2 ">
      <Tabs defaultValue="account" className=" p-1 ">
        <TabsList className="w-full bg-main-bg py-6">
          <IoIosArrowBack size={20} className="mr-5" />

          <TabsTrigger className="h-10 " value="account">
            Add BirthdayPost
          </TabsTrigger>
          <TabsTrigger value="password" className="h-10">
            Add Birthday
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <BirthdayPost />
        </TabsContent>
        <TabsContent value="password">
            <AddBirthdayofuser/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
