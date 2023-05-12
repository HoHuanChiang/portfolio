export enum Path {
    Home = "/",
    Education = "/Education",
    WorkExperience = "/workExperience",
    Projects = "/project",
    Resume = "/resume",
}

export interface CustomPathProps {
    path: Path;
    isCurrentPage: boolean;
    name: string;
}

export const isCurrentPage = (path: Path, currentPathName: string): boolean => {
    return path.toLocaleLowerCase() === currentPathName.toLocaleLowerCase();
};

export const GetPaths = (currentPathName: string) => {
    return [
        {
            path: Path.Home,
            isCurrentPage: isCurrentPage(Path.Home, currentPathName),
            name: "About Me",
        },
        {
            path: Path.WorkExperience,
            isCurrentPage: isCurrentPage(Path.WorkExperience, currentPathName),
            name: "Work Experience",
        },
        {
            path: Path.Projects,
            isCurrentPage: isCurrentPage(Path.Projects, currentPathName),
            name: "Projects",
        },
        {
            path: Path.Education,
            isCurrentPage: isCurrentPage(Path.Education, currentPathName),
            name: "Education & Skills",
        },
    ];
};
