import React, { MutableRefObject } from "react";
import "./Project.css";

interface ProjectInfo {
    name: string;
    isSelected?: boolean;
    ref?: MutableRefObject<HTMLDivElement | null>;
    description: JSX.Element;
}

const Project = () => {
    const TreeNodeVisualizerDescription = (
        <div className={"projectDescription"}>
            <div>
                <div>Languages & Tools - React | TypeScript</div>
                <div className={"spacing"}>
                    Build React application for visualizing breadth-first search
                    (BFS) and depth-first search (DFS) algorithms on a tree,
                    complete with a range of customizable settings.
                </div>
            </div>
            <div className={"projectDemo"}>
                <input type="button" value="Check it out" />
            </div>
        </div>
    );

    const HopeSimpsonDescription = (
        <div className={"projectDescription"}>
            <div>
                <div>
                    Languages & Tools - React | TypeScript | ScrollTrigger
                </div>
                <div className={"spacing"}>
                    Front-end project which involved redesigning the UI, adding
                    various animations including scroll-based animations and
                    ensuring the project was responsive to different devices.
                </div>
            </div>
            <div className={"projectDemo"}>
                <input type="button" value="Check it out" />
            </div>
        </div>
    );

    const MedicalCaseDescription = (
        <div className={"projectDescription"}>
            <div>
                <div>Languages & Tools - .NET Core MVC | C# | MS SQL</div>
                <div className={"spacing"}>
                    Web model that dynamically generates questionnaires from
                    databases based on patient choices in the medical field. The
                    model allows for deeper, more personalized questioning to
                    better evaluate the patient's health status. Additionally,
                    it automates the sending of treatment care messages to
                    patients and service records to managers through various
                    communication channels.
                </div>
            </div>
        </div>
    );

    const ObstetricCareDescription = (
        <div className={"projectDescription"}>
            <div>
                <div>
                    Languages & Tools - .NET Core MVC | C# | MS SQL | Java |
                    Swift
                </div>
                <div className={"spacing"}>
                    Mobile apps (IOS, Android) and website for obstetric
                    patients that import real-time fetal and maternal health
                    data from a Smart-Clothing product via Bluetooth. The
                    platform provides medical guidance and personal records,
                    improving communication with medical professionals and
                    enhancing the patient experience
                </div>
            </div>
        </div>
    );

    const PROJECTS: ProjectInfo[] = [
        {
            name: "Tree Node Visualizer",
            ref: React.useRef<HTMLDivElement | null>(null),
            description: TreeNodeVisualizerDescription,
        },
        {
            name: "Hope-Simpson COVID-19",
            ref: React.useRef<HTMLDivElement | null>(null),
            description: HopeSimpsonDescription,
        },
        {
            name: "Individual Medical Case Management System",
            ref: React.useRef<HTMLDivElement | null>(null),
            description: MedicalCaseDescription,
        },
        {
            name: "Obstetric Patients Care System",
            ref: React.useRef<HTMLDivElement | null>(null),
            description: ObstetricCareDescription,
        },
    ];
    const [projects, setProjects] = React.useState<ProjectInfo[]>(PROJECTS);

    const onProjectTabClick = (index: number) => {
        const newProjects = [...projects];
        newProjects[index].isSelected = !newProjects[index].isSelected;
        console.log(newProjects[index].isSelected);
        setProjects(newProjects);
    };

    const renderProjectTabs = () => {
        return (
            <div className={"projects"}>
                {projects.map((project, index) => {
                    const projectContainerStyle = project.isSelected
                        ? "projectContainer-expand"
                        : "projectContainer-collapse";
                    return (
                        <div
                            className={`projectContainer ${projectContainerStyle}`}
                            ref={project.ref}
                        >
                            <div
                                className={"projectTab"}
                                onClick={() => onProjectTabClick(index)}
                            >
                                {renderCube(
                                    project.isSelected ?? false,
                                    project.name,
                                    project.description
                                )}
                                {project.isSelected && (
                                    <div className={"expandTitleName"}>
                                        {project.name}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderCube = (
        isSelected: boolean,
        name: string,
        projectDescription: JSX.Element
    ) => {
        const sizeCSS = isSelected ? `70%` : "150px";
        const heightCSS = isSelected ? `300px` : "150px";
        const minWidthCSS = isSelected ? "500px" : "150px";
        const textAlignCSS = isSelected ? "left" : "center";
        const cubeStyle: React.CSSProperties = {
            width: sizeCSS,
            height: heightCSS,
            minWidth: minWidthCSS,
            textAlign: textAlignCSS,
        };

        const rightSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "none"
                : `translateZ(-${sizeCSS}) rotateY(-90deg)`,
        };
        const topSideStyle: React.CSSProperties = {
            transform: `translateZ(-${sizeCSS}) rotateY(180deg)`,
        };
        const leftSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "none"
                : `translateZ(-${sizeCSS}) rotateY(90deg)`,
        };
        const bottomSideStyle: React.CSSProperties = {};
        const frontSideStyle: React.CSSProperties = {
            transform: isSelected ? "none" : "rotateX(90deg) rotateY(180deg)",
        };
        const backSideStyle: React.CSSProperties = {
            transform: isSelected ? "none" : "rotateX(-90deg) rotateY(180deg)",
        };

        const cubeClass = isSelected
            ? "cube-expand"
            : "cubeSpinning cube-collapse";

        const sideClass = isSelected ? "cubeSpinningOnce-1 " : "side-animation";

        return (
            <div className={`${!isSelected ? "shadow" : ""}`}>
                <div className={`cube ${cubeClass}`} style={cubeStyle}>
                    <div
                        className={`side right ${sideClass}`}
                        style={rightSideStyle}
                    >
                        <div className={"rotate-45"}>{!isSelected && name}</div>
                    </div>
                    <div
                        className={`side top ${sideClass}`}
                        style={topSideStyle}
                    >
                        <div>{!isSelected && name}</div>
                    </div>
                    <div
                        className={`side left ${sideClass}`}
                        style={leftSideStyle}
                    >
                        <div className={"rotate45"}>{!isSelected && name}</div>
                    </div>
                    <div
                        className={`side bottom ${sideClass}`}
                        style={bottomSideStyle}
                    >
                        <div>{!isSelected && name}</div>
                    </div>
                    <div
                        className={`side front ${sideClass}`}
                        style={frontSideStyle}
                    >
                        <div>{!isSelected ? name : projectDescription}</div>
                    </div>
                    <div
                        className={`side back ${sideClass}`}
                        style={backSideStyle}
                    >
                        <div className={"rotate180"}>{!isSelected && name}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={"projectSectionContainer"}>{renderProjectTabs()}</div>
    );
};

export default Project;
