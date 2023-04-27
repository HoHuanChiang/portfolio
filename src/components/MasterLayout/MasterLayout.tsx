import React from "react";
import "./MasterLayout.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import Home from "../Home/Home";
import WorkExperience from "../WorkExperience/WorkExperience";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";
import Education from "../Education/Education";

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
            path: Path.Education,
            isCurrentPage: isCurrentPage(Path.Education),
            name: "Education & Skills",
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
            path: Path.Resume,
            isCurrentPage: isCurrentPage(Path.Resume),
            name: "Resume",
        },
    ];

    return (
        <div className={"main"}>
            <div className={"topNavbar"}>Ho Huan Chiang</div>
            <div className={"content"}>
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
                <div className={"innerContent"}>
                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path={Path.Education} element={<Education />} />
                        <Route
                            path={Path.WorkExperience}
                            element={<WorkExperience />}
                        />
                        <Route path={Path.Projects} element={<Project />} />
                        <Route path={Path.Resume} element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;
