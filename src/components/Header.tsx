"use client";

import { useState } from "react";

import IconBookOpenLine from "./icons/IconBookOpenLine";
import IconBriefcaseLine from "./icons/IconBriefcaseLine";
import IconChat3Line from "./icons/IconChat3Line";
import IconCloseLine from "./icons/IconCloseLine";
import IconHome5Line from "./icons/IconHome5Line";
import IconImageLine from "./icons/IconImageLine";
import IconMenu4Line from "./icons/IconMenu4Line";
import IconTrophyLine from "./icons/IconTrophyLine";
import MobileLink from "./MobileLink";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
    {
        id: "home",
        label: "Home",
        href: "home",
        icon: <IconHome5Line />,
    },
    {
        id: "skills",
        label: "Skills",
        href: "skills",
        icon: <IconTrophyLine />,
    },
    {
        id: "qualification",
        label: "Qualification",
        href: "qualification",
        icon: <IconBookOpenLine />,
    },
    {
        id: "services",
        label: "Services",
        href: "services",
        icon: <IconBriefcaseLine />,
    },
    {
        id: "projects",
        label: "Projects",
        href: "projects",
        icon: <IconImageLine />,
    },
    {
        id: "contact",
        label: "Contact",
        href: "contact",
        icon: <IconChat3Line />,
    },
];

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed bottom-[2rem] left-0 z-50 w-full md:static">
            <div className="nav container">
                <div className="flex h-[4rem] items-center justify-between rounded-[3rem] bg-background px-6 shadow-lg md:rounded-none md:px-[0] md:shadow-none">
                    <a className="font-display font-medium" href="/" title="logo">
                        Azamat.
                    </a>

                    <div className="flex items-center gap-x-8">
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-x-8">
                                {links.map((link) => (
                                    <li key={link.id}>
                                        <a href={`#${link.href}`}>
                                            <span>{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex items-center gap-x-2">
                            <ModeToggle />
                            <Sheet open={open} onOpenChange={setOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        className="text-lg md:hidden"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <IconMenu4Line />
                                        <span className="sr-only">Open</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    className="bottom-[2rem] left-4 right-4 mx-auto rounded-[2rem] px-6 pb-20 pt-8"
                                    side="bottom"
                                >
                                    <nav className="h-full">
                                        <ul className="grid grid-cols-3 justify-center gap-x-12 gap-y-8">
                                            {links.map((link) => (
                                                <li key={link.id}>
                                                    <MobileLink
                                                        className="flex flex-col items-center gap-y-1 text-lg"
                                                        onOpenChange={setOpen}
                                                        href={`#${link.href}`}
                                                    >
                                                        {link.icon}
                                                        <span className="text-sm">
                                                            {link.label}
                                                        </span>
                                                    </MobileLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <SheetClose
                                        className="absolute bottom-4 right-6 text-xl"
                                        asChild
                                    >
                                        <Button size="icon" variant="ghost">
                                            <IconCloseLine />
                                            <span className="sr-only">Close</span>
                                        </Button>
                                    </SheetClose>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
