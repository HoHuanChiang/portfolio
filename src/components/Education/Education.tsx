import React from "react";
import "./Education.css";
import { setAnimation } from "./Education.trigger";
import HorizontalProgressBar from "./HorizontalProgressBar/HorizontalProgressBar";

export interface SkillInfo {
    name: string;
    color: string;
    score: number;
}

const SKILLS: SkillInfo[] = [
    {
        name: "React",
        color: "#00e1ff",
        score: 85,
    },
    {
        name: "TypeScript/JavaScript",
        color: "#ff03e2",
        score: 85,
    },
    {
        name: "JQuery",
        color: "#0fa",
        score: 80,
    },
    {
        name: "GraphQL",
        color: "#9aff03",
        score: 70,
    },
    {
        name: ".NET Core",
        color: "#00e1ff",
        score: 75,
    },
    {
        name: "C#",
        color: "#ff03e2",
        score: 75,
    },
    {
        name: "SQL",
        color: "#0fa",
        score: 70,
    },
    {
        name: "Java",
        color: "#9aff03",
        score: 50,
    },
];

const Education = () => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        setAnimation(ref.current, SKILLS);
    }, []);

    return (
        <div className={"educationContainer"} ref={ref} id={"educationSection"}>
            <div className={"education"}>
                {/* <div className={"title"}>Education</div> */}
                <div className={"sectionTitle"}>Education</div>
                <div className={"educationGroup"}>
                    <div className={"educationItem"} id={"riceEducation"}>
                        <img
                            src={require("../../images/rice-logo.png")}
                            alt={"Rice Logo"}
                        />
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
                    <div className={"educationItem"} id={"cguEducation"}>
                        <img
                            src={require("../../images/cgu-logo.png")}
                            alt={"CGU Logo"}
                        />
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
                <div className={"sectionTitle"}>Skills</div>
                <div>
                    {SKILLS.map((skill, index) => {
                        return (
                            <div>
                                <div>{skill.name}</div>
                                <div>
                                    <HorizontalProgressBar
                                        value={skill.score}
                                        max={100}
                                        color={skill.color}
                                        innerContainerId={`progressBar${index}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Education;
