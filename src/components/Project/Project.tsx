import React from "react";
import "./Project.css";
import { GetProjects, ProjectInfo } from "./Project.util";

const Project = () => {
    const preventPropagation = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.stopPropagation();
    };

    const renderDefaultProjectDescription = (project: ProjectInfo) => {
        return (
            <div className={"projectDescription"}>
                <div>
                    <div className={"projectTitle"}>{project.name}</div>
                    <div>{project.description}</div>
                    <div className={"spacing"}></div>
                </div>
                {project.link && (
                    <div className={"projectDemo"}>
                        <a
                            href={project.link}
                            target={"_blank"}
                            className={"projectLink"}
                            onClick={preventPropagation}
                            rel={"noopener noreferrer"}
                        >
                            Visit Website
                        </a>
                    </div>
                )}
            </div>
        );
    };

    const [projects, setProjects] = React.useState<ProjectInfo[]>(
        GetProjects(
            React.useRef<HTMLDivElement | null>(null),
            React.useRef<HTMLDivElement | null>(null),
            React.useRef<HTMLDivElement | null>(null),
            React.useRef<HTMLDivElement | null>(null)
        )
    );

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
                                    {renderDefaultProjectDescription(project)}
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
