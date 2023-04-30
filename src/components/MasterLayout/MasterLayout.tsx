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
                </div>
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
        </div>
    );
};

export default MasterLayout;
