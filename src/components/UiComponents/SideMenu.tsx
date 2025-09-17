import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { Separator } from "../ui/separator";
const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <IoMdMenu size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>

        <div className="w-full flex flex-col gap-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <Link
            href={"/birthdaylist"}
            className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            Bithday List
          </Link>
          <Link
            href={"/profile/edit/7324623"}
            className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
          >
            Edit Profile
          </Link>
          <Link
            href={"#"}
            className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
          >
            Messages
          </Link>
          <Link href={"#"} className="w-full px-4 py-2 rounded-b-lg">
            Download
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
