import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

// Dynamically import React Quill for SSR support
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
  ];

  return (
    <div className="mb-4">
      <label htmlFor="editor" className="font-bold text-lg">
        Course Descriptions
      </label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Enter your course descriptions"
        style={{ minHeight: "150px" }}
      />
    </div>
  );
};

export default RichTextEditor;
