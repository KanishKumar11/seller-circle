import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VideoCard = ({ src, thumb }) => {
  return (
    <div className="shadow-md p-4 px-10 rounded-md border border-gray-200 bg-white object-contain z-0">
      <Dialog>
        <DialogTrigger>
          {" "}
          <div className=" w-auto object-contain">
            <Image src={thumb} width={500} height={250} alt="" />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white/80 backdrop-blur-xl flex w-full items-center justify-center flex-col h-[90vh] font-bold min-w-[70vw]">
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>
          <video
            controls
            autoPlay
            playsInline
            className="w-full h-auto object-contain"
          >
            <source src={src} type="video/mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
