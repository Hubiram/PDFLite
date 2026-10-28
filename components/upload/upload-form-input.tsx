"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { forwardRef } from "react";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading?: boolean;
}

const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
  ({ onSubmit, isLoading }, ref) => {
    return (
      <div>
        <form className="flex flex-col gap-6" onSubmit={onSubmit} ref={ref}>
          <div className="flex justify-end items-center gap-1.5">
            <Input type="file" id="file" name="file" accept="application/pdf" required />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Uploading..." : "Upload your PDF"}
            </Button>
          </div>
        </form>
      </div>
    );
  }
);

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;