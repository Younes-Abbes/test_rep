import AddCourseForm from "@/components/AddCourseForm/AddCourseForm";
/* import { handleAddFile } from "@/api/Data/addData";
import { handleGetFile } from "@/api/Data/getData";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function AccountSettings() {
  const { mutate: upload, data: uploadResult } = useMutation({
    mutationFn: handleAddFile,
    onError: (error) => toast.error(error.message),
    onSuccess: () => toast.success("File uploaded successfully"),
  });
  const { mutate: get, data } = useMutation({
    mutationFn: handleGetFile,
    onError: (error) => toast.error(error.message),
    onSuccess: () => toast.success("File uploaded successfully"),
  });

  return (
    <div>
      <form action={upload}>
        <label htmlFor="file"></label>
        <input id="file" type="file" name="file" />
        <button type="submit" className="bg-primary-200 p-4 rounded-lg">
          submit
        </button>
        {uploadResult === null || uploadResult === undefined ? (
          <p>no result</p>
        ) : (
          <p>{uploadResult}</p>
        )}
      </form>

      <form action={get}>
        <label htmlFor="bucket">bucket :</label>
        <input type="text" id="bucket" name="bucket" />

        <label htmlFor="picture">picture :</label>
        <input type="text" id="picture" name="picture" />
        <button>get picture</button>
        {data === null || data === undefined ? (
          <h2>no data to be shown</h2>
        ) : (
          <img src={data} alt="data" />
        )}
      </form>
    </div>
  );
} */

/* import { useState } from "react";

export default function ImageUploader() {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <label
        htmlFor="imageInput"
        className="block text-sm font-medium text-gray-700">
        Upload an image:
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        className="mt-1 block w-full"
        onChange={handleImageChange}
      />

      {imageSrc && (
        <div className="mt-4">
          <p className="text-lg">Selected image:</p>
          <img
            src={imageSrc}
            alt="Selected"
            className="mt-2 max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
} */

import React from "react";
import DraggableList from "./test components/test";

export default function page() {
  return (
    <div className="flex items-center justify-center ">
      <AddCourseForm />
    </div>
  );
}
