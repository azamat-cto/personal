import "@/css/global.css";
import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";

import { cn } from "@/lib/utils";

const roboto = Roboto({
    weight: ["400", "500"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

const lora = Lora({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    variable: "--font-lora",
});

export const metadata: Metadata = {
    title: "",
    description: "",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" className={cn(roboto.variable, lora.variable)} suppressHydrationWarning>
            <body className="bg-background font-sans text-foreground antialiased">
                <main>{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
