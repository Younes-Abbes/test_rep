import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between items-center gap-20">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
