import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: "",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
