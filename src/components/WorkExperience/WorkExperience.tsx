import React, { useRef } from "react";
import "./WorkExperience.css";
import { setAnimation } from "./WorkExperience.trigger";

interface CompanyInfo {
    id: string;
    startDate: string;
    endDate: string;
    name: string;
    title: string;
    location: string;
    description: string;
}

const COMPANIES: CompanyInfo[] = [
    {
        id: "catchpoint",
        startDate: "Jun. 2021",
        endDate: "April. 2023",
        name: "Catchpoint Systems, Inc.",
        title: "Software Engineer II",
        location: "New York, US",
        description:
            "Worked on identity provider server, implementing OAuth 2.0, and developing APIs can ensure the security of the application and user data, while management pages for account management can enhance the user experience.",
    },
    {
        id: "cgu",
        startDate: "Aug. 2019",
        endDate: "Jul. 2020",
        name: "Chang Gung University",
        title: "Full Stack Software Engineer",
        location: "Taoyuan, Taiwan",
        description:
            "Worked on four projects, including designing mobile apps and websites for obstetric patients, developing a website for medical record management, creating a volunteer web platform, and utilizing image recognition for medical analysis.",
    },
    {
        id: "kerson",
        startDate: "Aug. 2019",
        endDate: "Jul. 2020",
        name: "Kunshan Kerson Technology Company",
        title: "Software Engineer Intern",
        location: "Jiangsu, China",
        description:
            "Developed an Office Automation Management System for employees to accomplish their office basic tasks and goals digitally.",
    },
];

const WorkExperience = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    React.useEffect(() => {
        setAnimation(ref.current, windowSize.current[0]);
    }, [windowSize]);

    const renderCompany = (company: CompanyInfo, showTimelineLink: boolean) => {
        return (
            <div className={`${company.id} companyContainer`}>
                <div className={"workTimeline"} id={`${company.id}Timeline`}>
                    <div className={"stick"} />
                    <div className={"topDot"} />
                    <div className={"bottomDot"} />
                    <span className={"topDate"}>{company.endDate}</span>
                    <span className={"bottomDate"}>{company.startDate}</span>
                    {showTimelineLink && <div className={"freeTimeline"} />}
                </div>
                <div className={"linkToTimeline"} />
                <div className={"company"}>
                    <div className={"companyContent"}>
                        <div className={"title"}>{company.name}</div>
                        <div className={"position"}>
                            <div>{company.title}</div>
                            <div>{company.location}</div>
                        </div>
                        <div>{company.description}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={"workEpContainer"} ref={ref} id={"workSection"}>
            <div className={"sectionTitle"}>Work Experience</div>
            <div className={"companies"}>
                {COMPANIES.map((company, index) =>
                    renderCompany(company, index !== COMPANIES.length - 1)
                )}
            </div>
        </div>
    );
};

export default WorkExperience;
