import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";

export default function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center mb-4">
      
      <MotionDiv
        variants={itemVariants as any}
        className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Start Uploading Your PDF's
      </MotionDiv>
      <MotionDiv
        variants={itemVariants as any}
        className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center"
      >
        <p>Upload your PDF and let our AI do the magic! ✨</p>
      </MotionDiv>
    </div>
  );
}