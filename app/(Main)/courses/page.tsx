"use client";

import { QueryProvider } from "@/Contexts/useQueryProvider";
import Content from "./Content";

export default function Page(): JSX.Element {
  return (
    <QueryProvider>
      <Content />;
    </QueryProvider>
  );
}
