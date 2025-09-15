import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Back from "@/components/UiComponents/Back";
import Notification from "./(components)/Notification";
const page = () => {
  return (
    <section className="bg-main-bg min-h-screen relative p-2 py-3">
      <div className="flex items-center ">
        <Back />
        <div className="text-center flex-1 text-md font-semibold">
          Notifications
        </div>
      </div>

      <div>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </section>
  );
};

export default page;
