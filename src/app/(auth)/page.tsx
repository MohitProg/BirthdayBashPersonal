import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Home() {
  return (
    <>
      <div className="h-full w-full">
        <div className=" py-10 flex flex-col gap-6 items-center  justify-center ">
          {/* <Image
            alt="Loading"
            className="object-cover"
            fill
            src={"/images/main.jpg"}
          /> */}
          <h1 className="text-2xl text-center font-semibold">
            Your Wishes Makes Some <br /> One Happy 😍
          </h1>
          <Avatar className="h-52 w-52 ring-2  ring-btn-main">
            <AvatarImage src="/images/main2.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className=" flex flex-col  gap-2  items-center justify-end w-full absolute  left-0 right-0 bottom-0 p-3  bg-black/20">
          <Link href={"/login"} className="w-full commonbtn ">
            Log in
          </Link>
          <Link href={"/signup"} className=" commonbtn w-full">
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
}
