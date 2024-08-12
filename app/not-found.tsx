import Header from "@/components/Header/Header";
import Link from "next/link";
import React from "react";
export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between pb-3">
      <Header />
      <div className="grid grid-cols-2 h-full">
        <div className="w-1/2 h-2/5 my-auto ml-auto mr-14 flex flex-col gap-3">
          <div className="text-gray-100 text-6xl">Error 404</div>
          <div className="text-gray-900 text-4xl font-semibold">
            Oops! page not found
          </div>
          <div>
            Something went wrong. It's look that your requested could not be
            found. It's look like the link is broken or the page is removed.
          </div>
          <div>
            <button className="p-3 bg-primary-500 text-white">
              <Link href="/home">Go back </Link>
            </button>
          </div>
        </div>
        <div className=" relative ">
          <img
            src="/5224483 1.png"
            alt="image"
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex justify-around items-center">
      <div className="text-gray-400">
        © 2021 - Eduguard. Designed by{" "}
        <span className="font-semibold text-gray-800">Templatecookie</span>. All
        rights reserved
      </div>
      <div className="flex gap-3 text-gray-400">
        <div>
          <Link href="#">Link</Link>
        </div>
        <div>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div>
          <Link href="#">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
}
