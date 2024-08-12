import React from "react";

export default function StudentOptions({
  page,
  setPage,
}: {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ul className="flex justify-around p-5">
      <Option page={page} setPage={setPage} name="Dashboard" />
      <Option page={page} setPage={setPage} name="Courses" />
      <Option page={page} setPage={setPage} name="Teachers" />
      <Option page={page} setPage={setPage} name="Message" />
      <Option page={page} setPage={setPage} name="Wishlist" />
      <Option page={page} setPage={setPage} name="Purchase history" />
      <Option page={page} setPage={setPage} name="settings" />
    </ul>
  );
}

function Option({
  page,
  setPage,
  name,
}: {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}) {
  return (
    <li>
      <button onClick={() => setPage(name)}>{name}</button>
      <div
        className={`bg-primary-500 transition-all duration-200 h-0.5 ${
          page === name ? "w-full" : "w-0"
        }`}></div>
    </li>
  );
}
