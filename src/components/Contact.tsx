"use client";

import { sendEmail } from "@/actions/sendEmailAction";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

import IconArrowRightLine from "./icons/IconArrowRightLine";
import IconArrowRightUpLine from "./icons/IconArrowRightUpLine";
import IconChat3Line from "./icons/IconChat3Line";
import IconSendPlaneLine from "./icons/IconSendPlaneLine";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type Inputs = {
    username: string;
    email: string;
    message: string;
};

const schema = yup
    .object({
        username: yup
            .string()
            .min(3, "Username must be at least 3 characters")
            .max(255, "You may only include a maximum of 255 characters")
            .required("Username is a required field"),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is a required field"),
        message: yup
            .string()
            .max(255, "You may only include a maximum of 255 characters")
            .required("Message is a required field"),
    })
    .required();

function Contact() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);
        try {
            await sendEmail(data);
            toast("Message successfully sent", {
                description: dayjs(new Date()).format(`dddd, MMMM D, YYYY [at] HH:mm A`),
                action: {
                    label: "Close",
                    onClick: () => console.log("Closed"),
                },
            });
            reset({
                username: "",
                email: "",
                message: "",
            });
            window.scrollTo({
                top: 0,
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
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

                        <form name="formData" onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative grid gap-y-8">
                                <div className="relative h-[4rem]">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="username"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        className="h-full rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        type="text"
                                        id="username"
                                        placeholder="Enter username"
                                        disabled={loading}
                                        {...register("username")}
                                    />
                                    <span className="pl-6 text-sm text-red-500">
                                        {errors.username?.message}
                                    </span>
                                </div>

                                <div className="relative h-[4rem]">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="email"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        className="h-full rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        type="text"
                                        id="email"
                                        placeholder="Enter email"
                                        disabled={loading}
                                        {...register("email")}
                                    />
                                    <span className="pl-6 text-sm text-red-500">
                                        {errors.email?.message}
                                    </span>
                                </div>

                                <div className="relative h-40">
                                    <Label
                                        className="absolute -top-3 left-5 z-20 bg-background p-[0.35rem] text-xs font-medium text-heading"
                                        htmlFor="message"
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        className="h-full resize-none rounded-[2rem] border-2 border-foreground-light bg-none p-6 font-display text-md text-heading focus-visible:ring-0"
                                        id="message"
                                        placeholder="Enter message"
                                        disabled={loading}
                                        {...register("message")}
                                    />
                                    <span className="pl-6 text-sm text-red-500">
                                        {errors.message?.message}
                                    </span>
                                </div>

                                <div>
                                    <Button
                                        className="h-12 w-full rounded-[2rem] text-lg"
                                        size="lg"
                                        variant="neutral"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        <span>{loading ? "Sending..." : "Send"}</span>
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
