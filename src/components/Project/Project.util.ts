import { MutableRefObject } from "react";

export interface ProjectInfo {
    name: string;
    isSelected?: boolean;
    ref: MutableRefObject<HTMLDivElement | null>;
    description: string;
    skills: string;
    link?: string;
}

export const GetProjects = (
    ...refs: MutableRefObject<HTMLDivElement | null>[]
) => {
    return [
        {
            name: "Tree Node Visualizer",
            description:
                "Build React application for visualizing breadth-first search (BFS) and depth-first search (DFS) algorithms on a tree, complete with a range of customizable settings.",
            skills: "React | TypeScript",
            link: "https://hohuanchiang.github.io/tree-node-visualizer/",
            ref: refs[0],
        },
        {
            name: "Hope-Simpson COVID-19",
            description:
                "Front-end project which involved redesigning the UI, adding various animations including scroll-based animations and ensuring the project was responsive to different devices.",
            skills: "React | TypeScript | ScrollTrigger",
            link: "http://hsmap.rice.edu/",
            ref: refs[1],
        },
        {
            name: "Individual Medical Case Management System",
            description:
                "Web model that dynamically generates questionnaires from databases based on patient choices in the medical field. The model allows for deeper, more personalized questioning to better evaluate the patient's health status.",
            skills: ".NET Core MVC | C# | MS SQL",
            ref: refs[2],
        },
        {
            name: "Obstetric Patients Care System",
            description:
                "Obstetric patient platform with mobile apps (IOS, Android) and website that imports real-time fetal and maternal health data from Smart-Clothing via Bluetooth. Provides medical guidance and personal records, improving communication with medical professionals and enhancing patient experience.",
            skills: ".NET Core MVC | C# | MS SQL | Java | Swift",
            ref: refs[3],
        },
    ];
};
