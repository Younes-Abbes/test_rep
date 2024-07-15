"use client";

import Options from "./Options";
import Links from "./Links";

export default function FirstNav(): JSX.Element {
  return (
    <nav className="flex justify-between px-4">
      <Links />
      <Options />
    </nav>
  );
}
