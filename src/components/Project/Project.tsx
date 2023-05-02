import React, { MutableRefObject } from "react";
import "./Project.css";

interface ProjectInfo {
    name: string;
    isSelected?: boolean;
    ref?: MutableRefObject<HTMLDivElement | null>;
    description: JSX.Element;
}

const Project = () => {
    const preventPropagation = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.stopPropagation();
    };
    const TreeNodeVisualizerDescription = (
        <div className={"projectDescription"}>
            <div>
                <div className={"projectTitle"}>Tree Node Visualizer</div>
                <div>React | TypeScript</div>
                <div className={"spacing"}>
                    Build React application for visualizing breadth-first search
                    (BFS) and depth-first search (DFS) algorithms on a tree,
                    complete with a range of customizable settings.
                </div>
            </div>
            <div className={"projectDemo"}>
                <a
                    href={
                        "https://hohuanchiang.github.io/tree-node-visualizer/"
                    }
                    target={"_blank"}
                    className={"projectLink"}
                    onClick={preventPropagation}
                    rel={"noopener noreferrer"}
                >
                    Visit Website
                </a>
            </div>
        </div>
    );

    const HopeSimpsonDescription = (
        <div className={"projectDescription"}>
            <div>
                <div className={"projectTitle"}>Hope-Simpson COVID-19</div>
                <div>React | TypeScript | ScrollTrigger</div>
                <div className={"spacing"}>
                    Front-end project which involved redesigning the UI, adding
                    various animations including scroll-based animations and
                    ensuring the project was responsive to different devices.
                </div>
            </div>
            <div className={"projectDemo"}>
                <a
                    href={"http://hsmap.rice.edu/"}
                    target={"_blank"}
                    className={"projectLink"}
                    onClick={preventPropagation}
                    rel={"noopener noreferrer"}
                >
                    Visit Website
                </a>
            </div>
        </div>
    );

    const MedicalCaseDescription = (
        <div className={"projectDescription"}>
            <div>
                <div className={"projectTitle"}>
                    Individual Medical Case Management System
                </div>
                <div>.NET Core MVC | C# | MS SQL</div>
                <div className={"spacing"}>
                    Web model that dynamically generates questionnaires from
                    databases based on patient choices in the medical field. The
                    model allows for deeper, more personalized questioning to
                    better evaluate the patient's health status.
                </div>
            </div>
        </div>
    );

    const ObstetricCareDescription = (
        <div className={"projectDescription"}>
            <div>
                <div className={"projectTitle"}>
                    Obstetric Patients Care System
                </div>
                <div>.NET Core MVC | C# | MS SQL | Java | Swift</div>
                <div className={"spacing"}>
                    Obstetric patient platform with mobile apps (IOS, Android)
                    and website that imports real-time fetal and maternal health
                    data from Smart-Clothing via Bluetooth. Provides medical
                    guidance and personal records, improving communication with
                    medical professionals and enhancing patient experience.
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
                                    project.name
                                )}

                                <div
                                    className={`projectDescriptionContainer ${
                                        project.isSelected ? "show" : "hide"
                                    }`}
                                >
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderCube = (isSelected: boolean, name: string) => {
        const sizeCSS = "150px";
        const heightCSS = "150px";
        const textAlignCSS = "center";
        const cubeStyle: React.CSSProperties = {
            width: sizeCSS,
            height: heightCSS,
            textAlign: textAlignCSS,
        };

        const rightSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "rotateY(-90deg) translateX(-150px) translateZ(50px)"
                : `translateZ(-${sizeCSS}) rotateY(-90deg)`,
        };
        const topSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "translateZ(-200px) rotateY(180deg)"
                : `translateZ(-${sizeCSS}) rotateY(180deg)`,
        };
        const leftSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "rotateY(90deg) translateX(150px) translateZ(50px)"
                : `translateZ(-${sizeCSS}) rotateY(90deg)`,
        };
        const bottomSideStyle: React.CSSProperties = {
            transform: isSelected ? "translateZ(50px)" : "none",
        };
        const frontSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "rotateX(90deg) rotateY(180deg) translateZ(50px)"
                : "rotateX(90deg) rotateY(180deg)",
        };
        const backSideStyle: React.CSSProperties = {
            transform: isSelected
                ? "rotateX(-90deg) rotateY(180deg) translateZ(50px)"
                : "rotateX(-90deg) rotateY(180deg)",
        };

        const sideClass = "side-blinking-animation";

        return (
            <div className={`cubeContainer`}>
                <div className={`cube cubeSpinning`} style={cubeStyle}>
                    <div
                        className={`side right ${sideClass}`}
                        style={rightSideStyle}
                    >
                        <div className={"rotate-45"}>{name}</div>
                    </div>
                    <div
                        className={`side top ${sideClass}`}
                        style={topSideStyle}
                    >
                        <div>{name}</div>
                    </div>
                    <div
                        className={`side left ${sideClass}`}
                        style={leftSideStyle}
                    >
                        <div className={"rotate45"}>{name}</div>
                    </div>
                    <div
                        className={`side bottom ${sideClass}`}
                        style={bottomSideStyle}
                    >
                        <div>{name}</div>
                    </div>
                    <div
                        className={`side front ${sideClass}`}
                        style={frontSideStyle}
                    >
                        <div>{name}</div>
                    </div>
                    <div
                        className={`side back ${sideClass}`}
                        style={backSideStyle}
                    >
                        <div className={"rotate180"}>{name}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={"projectSectionContainer"} id={"projectSection"}>
            <div className={"sectionTitle"}>Projects</div>
            {renderProjectTabs()}
        </div>
    );
};

export default Project;
