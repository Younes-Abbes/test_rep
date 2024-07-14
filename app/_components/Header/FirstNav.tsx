"use client";

import Link from "next/link";
import { useState } from "react";
import Options from "./Options";
import Links from "./Links";

export default function FirstNav(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState(1);

  function handleClick(num: number) {
    setSelectedPage(num);
  }

  return (
    <nav className="flex justify-between px-4">
      <Links selectedPage={selectedPage} onClick={handleClick} />
      <Options />
    </nav>
  );
}
