import IconGitHubLine from "./icons/IconGitHubLine";
import IconInstagramLine from "./icons/IconInstagramLine";
import IconTelegram from "./icons/IconTelegram";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="pb-28 pt-12">
                    <div className="text-center">
                        <h1 className="mb-4 text-2xl">Azamat.</h1>
                        <p>Frontend Developer</p>
                    </div>

                    <ul className="my-10 flex items-center justify-center gap-x-10">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>

                    <ul className="mb-16 flex items-center justify-center gap-x-5">
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

                    <div className="text-center">&#169; Copyright Azamat. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
