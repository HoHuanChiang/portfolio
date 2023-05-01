import React from "react";
import "./MasterLayout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import WorkExperience from "../WorkExperience/WorkExperience";
import Project from "../Project/Project";
import Education from "../Education/Education";
import {
    updateBackground,
    updateName,
    updateRoutePath,
} from "./MasterLayout.trigger";

interface CustomPathProps {
    path: Path;
    isCurrentPage: boolean;
    name: string;
}

export enum Path {
    Home = "/",
    Education = "/Education",
    WorkExperience = "/workExperience",
    Projects = "/project",
    Resume = "/resume",
}

const MasterLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const ref = React.useRef<HTMLDivElement | null>(null);
    const homeRef = React.useRef<HTMLDivElement | null>(null);
    const workRef = React.useRef<HTMLDivElement | null>(null);
    const projectRef = React.useRef<HTMLDivElement | null>(null);
    const educationRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        updateBackground(ref.current);
        updateName(ref.current);
        updateRoutePath(ref.current, navigate);
    }, []);

    const isCurrentPage = (path: Path): boolean => {
        const currentPathName = location.pathname;
        return path.toLocaleLowerCase() === currentPathName.toLocaleLowerCase();
    };

    const paths: CustomPathProps[] = [
        {
            path: Path.Home,
            isCurrentPage: isCurrentPage(Path.Home),
            name: "About Me",
        },
        {
            path: Path.WorkExperience,
            isCurrentPage: isCurrentPage(Path.WorkExperience),
            name: "Work Experience",
        },
        {
            path: Path.Projects,
            isCurrentPage: isCurrentPage(Path.Projects),
            name: "Projects",
        },
        {
            path: Path.Education,
            isCurrentPage: isCurrentPage(Path.Education),
            name: "Education & Skills",
        },
    ];

    const onNavItemClick = (path: Path) => {
        switch (path) {
            case Path.Home:
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case Path.WorkExperience:
                workRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case Path.Projects:
                projectRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
            case Path.Education:
                educationRef.current?.scrollIntoView({ behavior: "smooth" });
                break;
        }
    };

    const onResumeBtnClick = () => {
        window.open(require("../../Files/Resume.pdf"), "_blank");
    };

    const isHomePage = isCurrentPage(Path.Home);
    return (
        <div className={"main"} ref={ref}>
            <div className={"topNavbar"}>
                <div className={"fullName"}>Ho-Huan Chiang</div>
                <div className={"preferName"}>Lars Chiang</div>
                <div className={"contactInfoContainer"}>
                    <div className={"contactInfo"}>
                        <a
                            href={"https://www.linkedin.com/in/ho-huan-chiang/"}
                            target={"_blank"}
                            title={
                                "https://www.linkedin.com/in/ho-huan-chiang/"
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className={"linkedIn"}
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:chianglars@gmail.com"
                            title={"chianglars@gmail.com"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className={"email"}
                            >
                                <path d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"leftNavbar"}>
                <nav>
                    {paths.map((pathProps) => {
                        const linkClassName = pathProps.isCurrentPage
                            ? isHomePage
                                ? "isSelectedHome"
                                : "isSelected"
                            : "";

                        return (
                            <Link
                                to={pathProps.path}
                                onClick={() => onNavItemClick(pathProps.path)}
                            >
                                <div className={linkClassName}>
                                    <span>{pathProps.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                    <div className={"resumeBtn"} onClick={onResumeBtnClick}>
                        <span>Resume</span>
                    </div>
                </nav>
            </div>
            <div className={"mainContent"}>
                <div ref={homeRef} id="homeRefContainer">
                    <Home />
                </div>{" "}
                <div ref={workRef} id="workRefContainer">
                    <WorkExperience />
                </div>
                <div ref={projectRef} id="projectRefContainer">
                    <Project />
                </div>
                <div ref={educationRef} id="educationRefContainer">
                    <Education />
                </div>
            </div>
            <div className={"bottomContactInfo"}>
                <div className={"contactInfo"}>
                    <a
                        href={"https://www.linkedin.com/in/ho-huan-chiang/"}
                        target={"_blank"}
                        title={"https://www.linkedin.com/in/ho-huan-chiang/"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className={"linkedIn"}
                        >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:chianglars@gmail.com"
                        title={"chianglars@gmail.com"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className={"email"}
                        >
                            <path d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;
