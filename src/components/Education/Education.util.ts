export interface SkillInfo {
    name: string;
    color: string;
    score: number;
}

export interface EducationInfo {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    degree: string;
    major: string;
    gpa: number;
    location: string;
    imageName: string;
    imageAlt: string;
}

export const EDUCATIONS: EducationInfo[] = [
    {
        id: "riceEducation",
        name: "Rice University",
        startDate: "Aug. 2020",
        endDate: "Dec. 2021",
        degree: "Master's Degree",
        major: "Computer Science",
        gpa: 3.95,
        location: "TX, United States",
        imageName: "rice-logo.png",
        imageAlt: "Rice Logo",
    },
    {
        id: "cguEducation",
        name: "Chang Gung University",
        startDate: "Aug. 2015",
        endDate: "Dec. 2019",
        degree: "Bachelor's Degree",
        major: "Computer Science",
        gpa: 3.89,
        location: "Taoyuan, Taiwan",
        imageName: "cgu-logo.png",
        imageAlt: "CGU Logo",
    },
];

export const SKILLS: SkillInfo[] = [
    {
        name: "React",
        color: "var(--neon-blue)",
        score: 85,
    },
    {
        name: "TypeScript/JavaScript",
        color: "var(--neon-pink)",
        score: 85,
    },
    {
        name: "JQuery",
        color: "var(--neon-green)",
        score: 80,
    },
    {
        name: "GraphQL",
        color: "var(--neon-yellow)",
        score: 70,
    },
    {
        name: ".NET Core",
        color: "var(--neon-blue)",
        score: 75,
    },
    {
        name: "C#",
        color: "var(--neon-pink)",
        score: 75,
    },
    {
        name: "SQL",
        color: "var(--neon-green)",
        score: 70,
    },
    {
        name: "Java",
        color: "var(--neon-yellow)",
        score: 50,
    },
];
