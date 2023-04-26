import React from "react";
import "./MasterLayout.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import WorkExperience from "../WorkExperience/WorkExperience";
import Project from "../Project/Project";
import Resume from "../Resume/Resume";

const MasterLayout = () => {
    return (
        <div className={"main"}>
            <div className={"topNavbar"}>Ho Huan Chiang</div>
            <div className={"content"}>
                <Router>
                    <div className={"leftNavbar"}>
                        <nav>
                            <Link to={"/"}>
                                <div>Home</div>
                            </Link>
                            <Link to={"/workExperience"}>
                                <div>Work Experience</div>
                            </Link>
                            <Link to={"/project"}>
                                <div>Projects</div>
                            </Link>
                            <Link to={"/resume"}>
                                <div>Resume</div>
                            </Link>
                        </nav>
                    </div>
                    <div className={"innerContent"}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="workExperience"
                                element={<WorkExperience />}
                            />
                            <Route path="project" element={<Project />} />
                            <Route path="resume" element={<Resume />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
};

export default MasterLayout;
