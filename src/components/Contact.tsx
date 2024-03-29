"use client";

import { FormEvent } from "react";

import IconArrowRightLine from "./icons/IconArrowRightLine";
import IconArrowRightUpLine from "./icons/IconArrowRightUpLine";
import IconChat3Line from "./icons/IconChat3Line";
import IconSendPlaneLine from "./icons/IconSendPlaneLine";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

function Contact() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <section className="py-10" id="contact">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl">Contact Me</h2>
                    <p className="text-sm">Get in touch</p>
                </div>

                <div className="grid gap-y-14 border-b border-heading pb-14">
                    <div>
                        <h2 className="mb-10 flex items-center justify-center gap-x-2 text-sm font-semibold">
                            <IconChat3Line className="text-md" />
                            <span>Talk to me</span>
                        </h2>

                        <ul className="grid gap-y-8">
                            <li className="flex flex-col items-start  gap-y-1">
                                <span className="text-sm text-foreground-light">Email</span>
                                <a
                                    className="font-display text-sm text-heading"
                                    href="mailto:azamatkhabibullaevcto@gmail.com"
                                >
                                    azamatkhabibullaevcto@gmail.com
                                </a>
                            </li>

                            <li className="flex flex-col items-start gap-y-1">
                                <span className="text-sm text-foreground-light">Telegram</span>
                                <span className="font-display text-sm text-heading">
                                    @azamatcto
                                </span>
                                <a
                                    className="group inline-flex items-center gap-x-2 text-sm text-heading"
                                    href="https://t.me/azamatcto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Write me</span>
                                    <IconArrowRightLine className="text-md transition-transform group-hover:translate-x-[0.25rem]" />
                                </a>
                            </li>

                            <li className="flex flex-col items-start gap-y-1">
                                <span className="text-sm text-foreground-light">Instagram</span>
                                <span className="font-display text-sm text-heading">
                                    @azamatcto
                                </span>
                                <a
                                    className="group inline-flex items-center gap-x-2 text-sm text-heading"
                                    href="https://instagram.com/azamatcto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Write me</span>
                                    <IconArrowRightLine className="text-md transition-transform group-hover:translate-x-[0.25rem]" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-10 flex items-center justify-center gap-x-2 text-sm font-semibold">
                            <IconSendPlaneLine className="text-md" />
                            <span>Write me your project</span>
                        </h2>

                        <form name="formData" onSubmit={handleSubmit}>
                            <div className="relative grid gap-y-8">
                                <div className="relative h-[4rem]">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="username"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        className="absolute left-0 top-0 z-10 h-full w-full rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter username"
                                    />
                                </div>

                                <div className="relative h-[4rem]">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="email"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        className="absolute left-0 top-0 z-10 h-full w-full rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="relative h-40">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="message"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        className="absolute left-0 top-0 z-10 h-full w-full resize-none rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        name="message"
                                        id="message"
                                        placeholder="Enter message"
                                    />
                                </div>

                                <div>
                                    <Button
                                        className="gap-x-1 font-display text-xl font-semibold text-heading hover:bg-background hover:text-heading"
                                        variant="ghost"
                                        type="submit"
                                    >
                                        <span>Submit</span>
                                        <IconArrowRightUpLine className="text-2xl" />
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
