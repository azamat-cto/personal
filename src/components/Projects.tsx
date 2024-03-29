import Porject1 from "@/assets/images/project1.jpg";
import Porject2 from "@/assets/images/project2.jpg";
import Porject3 from "@/assets/images/project3.jpg";
import Porject4 from "@/assets/images/project4.jpg";
import Image from "next/image";

import IconArrowRightLine from "./icons/IconArrowRightLine";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const projects = [
    {
        id: "project",
        img: Porject1,
        subtitle: "Demo",
        title: "Project 1",
        url: "https://azamatcto.vercel.app",
    },
    {
        id: "project",
        img: Porject2,
        subtitle: "Demo",
        title: "Project 2",
        url: "https://azamatcto.vercel.app",
    },
    {
        id: "project",
        img: Porject3,
        subtitle: "Demo",
        title: "Project 3",
        url: "https://azamatcto.vercel.app",
    },
    {
        id: "project",
        img: Porject4,
        subtitle: "Demo",
        title: "Project 4",
        url: "https://azamatcto.vercel.app",
    },
];

function Projects() {
    return (
        <section className="py-10" id="projects">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-2xl">Projects</h2>
                    <p className="text-sm">Most recent works</p>
                </div>

                <div className="border-b border-heading pb-14">
                    <Carousel className="mx-auto w-[250px]">
                        <CarouselContent>
                            {projects.map((project, index) => (
                                <CarouselItem key={project.id + index}>
                                    <div className="mb-5">
                                        <Image
                                            className="rounded-xl"
                                            src={project.img}
                                            width={640}
                                            height={427}
                                            alt={`${project.title}`}
                                        />
                                    </div>
                                    <p className="text-sm text-foreground-light">
                                        {project.subtitle}
                                    </p>
                                    <h2 className="mb-5 mt-2 text-xl">{project.title}</h2>
                                    <a
                                        className="group inline-flex items-center gap-x-2 text-sm text-heading"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>View demo</span>
                                        <IconArrowRightLine className="text-sm transition-transform group-hover:translate-x-[0.25rem]" />
                                    </a>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Projects;
