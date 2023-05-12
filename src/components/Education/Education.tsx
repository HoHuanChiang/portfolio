import React from "react";
import "./Education.css";
import { setAnimation } from "./Education.trigger";
import HorizontalProgressBar from "./HorizontalProgressBar/HorizontalProgressBar";
import { SKILLS, EDUCATIONS } from "./Education.util";

const Education = () => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        setAnimation(ref.current, SKILLS);
    }, []);

    return (
        <div className={"educationContainer"} ref={ref} id={"educationSection"}>
            <div className={"education"}>
                <div className={"sectionTitle"}>Education</div>
                <div className={"educationGroup"}>
                    {EDUCATIONS.map((education) => {
                        return (
                            <div className={"educationItem"} id={education.id}>
                                <img
                                    src={require("../../images/" +
                                        `${education.imageName}`)}
                                    alt={education.imageAlt}
                                />
                                <div className={"description"}>
                                    <div className={"descriptionName"}>
                                        Name
                                    </div>
                                    <span>{education.name}</span>
                                </div>
                                <div className={"description"}>
                                    <div className={"descriptionName"}>
                                        Year
                                    </div>
                                    <span>
                                        {education.startDate} -{" "}
                                        {education.endDate}
                                    </span>
                                </div>
                                <div className={"description"}>
                                    <div className={"descriptionName"}>
                                        Degree
                                    </div>
                                    <span>{education.degree}</span>
                                </div>
                                <div className={"description"}>
                                    <div className={"descriptionName"}>
                                        Major
                                    </div>
                                    <span>{education.major}</span>
                                </div>
                                <div className={"description"}>
                                    <div className={"descriptionName"}>GPA</div>
                                    <span>{education.gpa} / 4.0</span>
                                </div>
                                <div className={"description"}>
                                    <div className={"descriptionName"}>
                                        Location
                                    </div>
                                    <span>{education.location}</span>
                                </div>
                            </div>
                        );
                    })}
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
