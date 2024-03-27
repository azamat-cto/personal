import ProfileImage from "@/assets/images/profile.png";
import Image from "next/image";

import IconGitHubLine from "@/components/icons/IconGitHubLine";
import IconInstagramLine from "@/components/icons/IconInstagramLine";
import IconTelegram from "@/components/icons/IconTelegram";
import ShapeCircle from "@/components/icons/ShapeCircle";
import ShapeWaves from "@/components/icons/ShapeWaves";

function Home() {
    return (
        <>
            <section className="py-10">
                <div className="container">
                    <div className="grid gap-y-16 border-b pb-14 pt-8">
                        <div className="grid gap-y-6">
                            <h1 className="mb-2 text-center text-2xl tracking-[0.3px]">
                                Hi, I&apos;m Azamat <br />
                                Frontend Developer <br />
                                Based in Tashkent
                            </h1>

                            <div className="relative grid h-[290px] w-[200px] place-items-center justify-self-center rounded-[6.25rem] border-2 bg-background">
                                <div className="flex h-[260px] w-[170px] items-end justify-center overflow-hidden rounded-[5.5rem] bg-[linear-gradient(180deg,hsla(207,48%,72%,0),hsla(207,65%,65%,1))]">
                                    <Image
                                        className="w-[150px]"
                                        src={ProfileImage}
                                        width={791}
                                        height={1280}
                                        alt="Azamat's personal image"
                                    />
                                </div>

                                <ShapeWaves className="absolute -left-6 top-20 w-[50px] opacity-[0.1]" />
                                <ShapeCircle className="absolute -bottom-8 -right-12 -z-10 w-[150px] rotate-[15deg] opacity-[0.1]" />
                            </div>

                            <ul className="flex items-center justify-center gap-x-5">
                                <li>
                                    <a
                                        className="inline-block text-xl transition-transform hover:translate-y-[-0.15rem]"
                                        href="https://github.com/azamat-cto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconGitHubLine />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-block text-xl transition-transform hover:translate-y-[-0.15rem]"
                                        href="https://instagram.com/azamatcto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconInstagramLine />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-block text-xl transition-transform hover:translate-y-[-0.15rem]"
                                        href="https://t.me/azamatcto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconTelegram />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="grid gap-y-8">
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    BIOGRAPHY
                                </h3>
                                <p className="pr-16 font-display">
                                    Hi, I&apos;m Azamat, Frontend Developer. Passionate about
                                    designing beautiful web interfaces. Based in Uzbekistan.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    CONTACT
                                </h3>
                                <div className="flex flex-col pr-16">
                                    <a
                                        className="font-display"
                                        href="https://maps.app.goo.gl/f1ab9fcihwBXvN2i7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Tashkent, Uzbekistan
                                    </a>
                                    <a
                                        className="font-display"
                                        href="mailto:cto.azamatkhabibullaev@gmail.com"
                                    >
                                        cto.azamatkhabibullaev@gmail.com
                                    </a>
                                    <a className="font-display" href="tel:998909179930">
                                        +998 (90) 917-99-30
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    SERVICES
                                </h3>
                                <p className="pr-16 font-display">
                                    Frontend Development <br />
                                    Backend Development <br />
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-y-8">
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    YEARS OF EXPERIENCE
                                </h3>
                                <p className="pr-16 font-display text-2xl font-semibold">03+</p>
                            </div>
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    COMPLETED PROJECTS
                                </h3>
                                <p className="pr-16 font-display text-2xl font-semibold">10+</p>
                            </div>
                            <div>
                                <h3 className="mb-4 font-sans text-xs font-normal text-foreground/50">
                                    COMPANIES WORKED
                                </h3>
                                <p className="pr-16 font-display text-2xl font-semibold">02+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
