import { FC, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
