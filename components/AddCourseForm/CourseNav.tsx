import React from "react";

export default function CourseNav({
  page,
  setPage,
}: {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <nav className="w-full h-16">
      <ul className="grid grid-cols-4 w-full border border-b-2 text-center">
        <ListItem
          page={page}
          img="Stack.png"
          name="Basic Information"
          set={setPage}></ListItem>
        <ListItem
          page={page}
          img="ClipboardText.png"
          name="Advanced Information"
          set={setPage}></ListItem>
        <ListItem
          page={page}
          set={setPage}
          img="MonitorPlay.png"
          name="Curriculum"></ListItem>
        <ListItem
          page={page}
          set={setPage}
          img="PlayCircle.png"
          name="Publish Course"></ListItem>
      </ul>
    </nav>
  );
}

function ListItem({
  page,
  img,
  name,
  set,
}: {
  page: string;
  img: string;
  name: string;
  set: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <li className=" p-4 border-b-2 md:border-b-0 md:border-r-2 border-b-gray-300 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-200">
      <button className="w-full" onClick={(e) => set(name)}>
        <div className="flex items-center gap-2">
          <img src={`/assets/AddCourseForm/${img}`} alt="img" />
          {name}
        </div>
        <div
          className={`mt-1 bg-primary-500 ${
            name === page ? "w-full" : "w-0"
          } h-0.5 transition-all duration-300`}></div>
      </button>
    </li>
  );
}
