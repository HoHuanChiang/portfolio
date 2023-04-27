import React from "react";
import "./Education.css";
import HorizontalProgressBar from "./HorizontalProgressBar/HorizontalProgressBar";

const Education = () => {
    return (
        <div className={"container"}>
            <div className={"education"}>
                <div className={"title"}>Education</div>
                <div className={"educationGroup"}>
                    <div className={"educationItem"}>
                        <img src={require("../../images/rice-logo.png")} />
                        <div className={"description"}>
                            <div className={"descriptionName"}>Name</div>
                            <span>Rice University</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Year</div>
                            <span>Aug. 2020 - Dec. 2021</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Degree</div>
                            <span>Master's Degree</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Major</div>
                            <span>Computer Science</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>GPA</div>
                            <span>3.95 / 4.0</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Location</div>
                            <span>TX, United States</span>
                        </div>
                    </div>
                    <div className={"educationItem"}>
                        <img src={require("../../images/cgu-logo.png")} />
                        <div className={"description"}>
                            <div className={"descriptionName"}>Name</div>
                            <span>Chang Gung University</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Year</div>
                            <span>Aug. 2015 - Dec. 2019</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Degree</div>
                            <span>Bachelor's Degree</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Major</div>
                            <span>Computer Science</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>GPA</div>
                            <span>3.89 / 4.0</span>
                        </div>
                        <div className={"description"}>
                            <div className={"descriptionName"}>Location</div>
                            <span>Taoyuan, Taiwan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"skill"}>
                <div className={"title"}>Skills</div>
                <div>
                    <div>
                        <div>React</div>
                        <div>
                            <HorizontalProgressBar
                                value={85}
                                max={100}
                                color={"#05445E"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>TypeScript/JavaScript</div>
                        <div>
                            <HorizontalProgressBar
                                value={85}
                                max={100}
                                color={"#189AB4"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>JQuery</div>
                        <div>
                            <HorizontalProgressBar
                                value={80}
                                max={100}
                                color={"#75E6DA"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>GraphQL</div>
                        <div>
                            <HorizontalProgressBar
                                value={70}
                                max={100}
                                color={"#2E8BC0"}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>.NET Core</div>
                    <div>
                        <HorizontalProgressBar
                            value={75}
                            max={100}
                            color={"#05445E"}
                        />
                    </div>
                </div>
                <div>
                    <div>C#</div>
                    <div>
                        <HorizontalProgressBar
                            value={75}
                            max={100}
                            color={"#189AB4"}
                        />
                    </div>
                </div>
                <div>
                    <div>SQL</div>
                    <div>
                        <HorizontalProgressBar
                            value={70}
                            max={100}
                            color={"#75E6DA"}
                        />
                    </div>
                </div>
                <div>
                    <div>Java</div>
                    <div>
                        <HorizontalProgressBar
                            value={50}
                            max={100}
                            color={"#2E8BC0"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
