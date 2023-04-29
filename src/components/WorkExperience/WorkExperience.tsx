import React, { useRef } from "react";
import Timeline from "./Timeline/Timeline";
import "./WorkExperience.css";
import { setAnimation } from "./WorkExperience.trigger";

const WorkExperience = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
        setAnimation(ref.current);
    }, []);

    return (
        <div className={"workEpContainer"} ref={ref}>
            <Timeline />
            <div className={"companies"}>
                <div>
                    <div className={"company catchpoint"}>
                        <div className={"linkToTimeline"} />
                        <div className={"companyContent"}>
                            <div className={"title"}>
                                Catchpoint Systems, Inc.
                            </div>
                            <div className={"position"}>
                                <div>Software Engineer II</div>
                                <div>New York, US</div>
                            </div>
                            <div>
                                Worked on identity provider server, implementing
                                OAuth 2.0, and developing APIs can ensure the
                                security of the application and user data, while
                                management pages for account management can
                                enhance the user experience.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"company cgu"}>
                        <div className={"linkToTimeline"} />
                        <div className={"companyContent"}>
                            <div className={"title"}>Chang Gung University</div>
                            <div className={"position"}>
                                <div>Full Stack Software Engineer</div>
                                <div>Taoyuan, Taiwan</div>
                            </div>
                            <div>
                                Worked on four projects, including designing
                                mobile apps and websites for obstetric patients,
                                developing a website for medical record
                                management, creating a volunteer web platform,
                                and utilizing image recognition for medical
                                analysis.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"company kerson"}>
                        <div className={"linkToTimeline"} />
                        <div className={"companyContent"}>
                            <div className={"title"}>
                                Kunshan Kerson Technology Company
                            </div>
                            <div className={"position"}>
                                <div>Software Engineer Intern</div>
                                <div>Jiangsu, China</div>
                            </div>
                            <div>
                                Developed an Office Automation Management System
                                for employees to accomplish their office basic
                                tasks and goals digitally.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
