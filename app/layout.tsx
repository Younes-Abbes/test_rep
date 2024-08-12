"use client";

import { GloabalProvider } from "@/Contexts/GloabalProvider";
import "@/app/globals.css";
import { QueryProvider } from "@/Contexts/useQueryProvider";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  noLayout?: boolean;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center min-h-screen">
        <GloabalProvider>
          <QueryProvider>
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
              limit={3}
              stacked
            />
            <main>{children}</main>
          </QueryProvider>
        </GloabalProvider>
      </body>
    </html>
  );
}
