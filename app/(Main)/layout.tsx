import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
