"use client";
import { LinkProvider, useLink } from "@/Contexts/LinkContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Links() {
  const routes: { url: string; num: number }[] = [
    { url: "/", num: 1 },
    { url: "/courses", num: 2 },
    { url: "/about", num: 3 },
    { url: "/contact", num: 4 },
    { url: "/becomeAnInstructor", num: 5 },
  ];

  return (
    <LinkProvider>
      <ul className="flex justify-start gap-6 ml-5 w-full items-center p-2">
        {routes.map((route) => (
          <LinkElement key={route.num} url={route.url} num={route.num}>
            {route.url === "/" ? "Home" : route.url.slice(1)}
          </LinkElement>
        ))}
      </ul>
    </LinkProvider>
  );
}

function LinkElement({
  children,
  url,
  num,
}: {
  children: any;
  url: string;
  num: number;
}): JSX.Element {
  const { selectedPage, setSelectedPage } = useLink();

  return (
    <li>
      <Link href={url} onClick={() => setSelectedPage(num)}>
        {children}
      </Link>
      <div
        className={`${
          selectedPage === num ? "w-full" : "w-0"
        } h-0.5 bg-orange-600 transition-all duration-300`}></div>
    </li>
  );
}
