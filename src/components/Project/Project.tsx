import React, { MutableRefObject } from "react";
import "./Project.css";

interface ProjectInfo {
    name: string;
    isSelected?: boolean;
    top?: number;
    left?: number;
    refTab: MutableRefObject<HTMLDivElement | null>;
}

const Project = () => {
    const PROJECTS: ProjectInfo[] = [
        {
            name: "Tree Node Visualizer",
            refTab: React.useRef<HTMLDivElement>(null),
        },
        {
            name: "Hope-Simpson COVID-19",
            refTab: React.useRef<HTMLDivElement>(null),
        },
        {
            name: "Individual Medical Case Management System",
            refTab: React.useRef<HTMLDivElement>(null),
        },
        {
            name: "Obstetric Patients Care System",
            refTab: React.useRef<HTMLDivElement>(null),
        },
    ];
    const [projects, setProjects] = React.useState<ProjectInfo[]>(PROJECTS);

    React.useLayoutEffect(() => {
        const newProjects = [...projects];
        newProjects.forEach((project) => {
            project.left =
                project.refTab?.current?.getBoundingClientRect().left;
            project.top = project.refTab?.current?.getBoundingClientRect().top;
        });
        setProjects(newProjects);
    }, []);

    const onProjectTabClick = (index: number) => {
        setProjects((prevProjects) => {
            const newProjects = [...prevProjects];
            newProjects.forEach((project) => (project.isSelected = false));
            newProjects[index].isSelected = true;
            return newProjects;
        });
    };

    const renderProjectTabs = () => {
        return (
            <div className={"projectNav"}>
                {projects.map((project, index) => {
                    const isSelected = project.isSelected ?? false;

                    const cubeStyle: React.CSSProperties = {
                        top: project.top,
                        left: project.left,
                        // animation: "5s ease spinning",
                    };

                    console.log(cubeStyle);

                    return (
                        <div
                            className={"projectTab"}
                            onClick={() => onProjectTabClick(index)}
                            ref={project.refTab}
                        >
                            <div
                                style={cubeStyle}
                                className={`projectCube ${
                                    isSelected ? "cubeDescription" : ""
                                }`}
                            >
                                {renderCube(isSelected, 50)}
                            </div>
                            <div className={"title"}>{project.name}</div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderCube = (isSelected: boolean, size: number) => {
        size = isSelected ? 210 : 20;
        const startSpinning = !isSelected;
        const cubeStyle: React.CSSProperties = {
            width: `${size}px`,
            height: `${size}px`,
            // animation: startSpinning ? "4s linear spinning infinite" : "",
            // animation: "4s linear spinning infinite",
            animationIterationCount: startSpinning ? "infinite" : "1",
        };

        return (
            <div className={`cube`} style={cubeStyle}>
                <div className={`parent ${isSelected ? "topRightMove" : ""}`}>
                    <div
                        className="side right"
                        style={{
                            transform: `translateZ(-${size}px) rotateY(-90deg)`,
                        }}
                    ></div>
                    <div
                        className={`parent ${isSelected ? "topMove" : ""}`}
                        style={
                            isSelected
                                ? { transformOrigin: `left bottom -${size}px` }
                                : {}
                        }
                    >
                        <div
                            className="side top"
                            style={{ transform: `translateZ(${-size}px)` }}
                        ></div>
                    </div>
                </div>
                <div className={`parent ${isSelected ? "leftMove" : ""}`}>
                    <div
                        className="side left"
                        style={{
                            transform: `translateZ(-${size}px) rotateY(90deg)`,
                        }}
                    ></div>
                </div>
                <div className="side bottom"></div>
                <div className={`parent ${isSelected ? "downMove" : ""}`}>
                    <div className="side front"></div>
                </div>
                <div className={`parent ${isSelected ? "backMove" : ""}`}>
                    <div className="side back"></div>
                </div>
            </div>
        );
    };

    return <div className={"container"}>{renderProjectTabs()}</div>;
};

export default Project;
