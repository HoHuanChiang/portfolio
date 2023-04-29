import React from "react";
import "./MasterLayout.css";
import { Link, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import WorkExperience from "../WorkExperience/WorkExperience";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import Education from "../Education/Education";
import { updateBackground } from "./MasterLayout.trigger";

interface CustomPathProps {
    path: string;
    isCurrentPage: boolean;
    name: string;
}

enum Path {
    Home = "/",
    Education = "/Education",
    WorkExperience = "/workExperience",
    Projects = "/project",
    Resume = "/resume",
}

const MasterLayout = () => {
    const location = useLocation();
    const ref = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        updateBackground(ref.current);
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
        {
            path: Path.Resume,
            isCurrentPage: isCurrentPage(Path.Resume),
            name: "Resume",
        },
    ];

    return (
        <div className={"main"} ref={ref}>
            <div className={"topNavbar"}>Ho-Huan Chiang</div>
            <div className={"leftNavbar"}>
                <nav>
                    {paths.map((pathProps) => {
                        return (
                            <Link to={pathProps.path}>
                                <div
                                    className={
                                        pathProps.isCurrentPage
                                            ? "isSelected"
                                            : ""
                                    }
                                >
                                    {pathProps.name}
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className={"mainContent"}>
                <Home />
                <WorkExperience />
                <Project />
                <Education />
                <Resume />
            </div>
        </div>
    );
};

export default MasterLayout;
