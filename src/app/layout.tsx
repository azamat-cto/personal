import "@/css/global.css";

import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";

import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";

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
    title: "Azamat's personal website",
    description: "",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html
            lang="en"
            className={cn(roboto.variable, lora.variable, "scroll-smooth")}
            suppressHydrationWarning
        >
            <body className="bg-background font-sans text-foreground antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}

export default RootLayout;
