import LogoCSS3 from "@/assets/images/css3.svg";
import LogoFigma from "@/assets/images/figma.svg";
import LogoGit from "@/assets/images/git.svg";
import LogoHTML5 from "@/assets/images/html5.svg";
import LogoJava from "@/assets/images/java.svg";
import LogoJavaScript from "@/assets/images/js.svg";
import LogoReact from "@/assets/images/reactjs.svg";
import Image from "next/image";

import IconBracesLine from "./icons/IconBracesLine";
import IconDatabase2Line from "./icons/IconDatabase2Line";

const skills = [
    {
        id: "frontend",
        icon: <IconBracesLine />,
        title: "Frontend Development",
        items: [
            {
                id: "html5",
                label: "HTML5",
                level: "Intermediate",
                img: LogoHTML5,
            },
            {
                id: "css3",
                label: "CSS3",
                level: "Intermediate",
                img: LogoCSS3,
            },
            {
                id: "figma",
                label: "Figma",
                level: "Intermediate",
                img: LogoFigma,
            },
            {
                id: "git",
                label: "Git",
                level: "Intermediate",
                img: LogoGit,
            },
            {
                id: "javascript",
                label: "JavaScript",
                level: "Intermediate",
                img: LogoJavaScript,
            },
            {
                id: "react",
                label: "React",
                level: "Intermediate",
                img: LogoReact,
            },
        ],
    },
    {
        id: "backend",
        icon: <IconDatabase2Line />,
        title: "Backend Development",
        items: [
            {
                id: "java",
                label: "Java",
                level: "Beginner",
                img: LogoJava,
            },
        ],
    },
];

function Skills() {
    return (
        <section className="py-10" id="skills">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl">Skills</h2>
                    <p className="text-sm">My favorite skills</p>
                </div>

                <div className="grid gap-y-14 border-b border-heading pb-14">
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            <h3 className="mb-12 flex items-center justify-center gap-x-2 text-sm font-semibold">
                                <span className="text-2xl">{skill.icon}</span>
                                {skill.title}
                            </h3>
                            <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                                {skill.items.map((item) => (
                                    <div
                                        className="grid justify-center text-center"
                                        key={item.id}
                                    >
                                        <div className="mb-2 grid h-[100px] w-[80px] place-items-center rounded-[3rem] bg-card transition-transform hover:animate-bounce-skills">
                                            <Image
                                                className="h-auto w-[40px]"
                                                src={item.img}
                                                width={36}
                                                height={36}
                                                alt={`${item.label} logo`}
                                            />
                                        </div>
                                        <h3 className="text-sm">
                                            {item.label}
                                        </h3>
                                        <p className="text-2xs text-foreground-light">
                                            {item.level}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
