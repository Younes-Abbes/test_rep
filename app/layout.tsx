import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QueryProvider from "@/components/query-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  noLayout,
}: Readonly<{
  children: React.ReactNode;
  noLayout?: boolean;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between gap-16 min-h-screen">
        <QueryProvider>
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
