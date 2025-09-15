"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus } from "react-icons/fa6";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { MdOutlineAttachFile } from "react-icons/md";
import Image from "next/image";

const AddBithdayPost = () => {
  // for handling file call
  const fileImageref = useRef<HTMLInputElement>(null);
  // state for handloing file call
  const [uploadfile, setuploadfile] = useState<File | null>();

  // handle for calling file upload
  const handleFileUpload = () => {
    fileImageref?.current?.click();
  };

  // handle for getting uploaded file change
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files[0].type);

    if (e.target?.files) {
      setuploadfile(e.target.files[0]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center flex-col">
        {" "}
        <FaPlus size={18} />
        <span className="text-xs">Add Post</span>
      </DialogTrigger>
      <DialogContent className="p-2 py-4">
        <DialogHeader>
          <DialogTitle>Add Best Birthday Post Ever🤩</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4 mt-2">
          <div className="grid gap-2">
  
            <Textarea
              className=" focus:ring-0 border-none rounded-none  ring-0"
              placeholder="Tell story of your best bithday wish ever"
            />
          </div>

          {uploadfile && (
            <div className="h-[20vh] relative  ring-blue-300 ring-1 rounded-lg">
              <Image
                alt="please wait"
                fill
                objectFit="contain"
                src={URL.createObjectURL(uploadfile)}
              />
            </div>
          )}
          <div className="grid gap-2">
            <Input
              ref={fileImageref}
              id="image"
              type="file"
              onChange={(e) => handleFileChange(e)}
              placeholder="Enter your password"
              required
              className="hidden"
              accept="image/*,video/*"
            />

            <div className="flex items-center justify-start">
              <span
                onClick={handleFileUpload}
                className="flex items-center text-xs text-blue-500"
              >
                <MdOutlineAttachFile size={18} />
                upload file
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button className="commonbtn">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBithdayPost;
