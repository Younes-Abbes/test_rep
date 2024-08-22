import React, { useState } from "react";

export default function PublishCourse() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [congratulationsMessage, setCongratulationsMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [instructors, setInstructors] = useState([
    { id: 1, name: "Username", role: "UI/UX Designer", avatar: "avatar-url-1" },
    { id: 2, name: "Username", role: "UI/UX Designer", avatar: "avatar-url-2" },
  ]);

  const handleRemoveInstructor = (id: any) => {
    setInstructors(instructors.filter((instructor) => instructor.id !== id));
  };

  const handleSubmit = () => {
    // Add form submission logic here
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Message</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block mb-2">Welcome Message</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded"
              placeholder="Enter course starting message here..."
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2">Congratulations Message</label>
            <textarea
              className="w-full p-4 border border-gray-300 rounded"
              placeholder="Enter your course completed message here..."
              value={congratulationsMessage}
              onChange={(e) => setCongratulationsMessage(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Add Instructor ({instructors.length})
        </h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded"
            placeholder="Search by username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="p-4 border border-gray-300 rounded flex items-center">
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{instructor.name}</h3>
                <p className="text-gray-500">{instructor.role}</p>
              </div>
              <button
                className="ml-4 text-red-500"
                onClick={() => handleRemoveInstructor(instructor.id)}>
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button className="px-6 py-3 bg-gray-200 rounded text-gray-700">
          Prev Step
        </button>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded"
          onClick={handleSubmit}>
          Submit For Review
        </button>
      </div>
    </div>
  );
}
