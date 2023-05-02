import gsap from "gsap";
import { SkillInfo } from "./Education";

export const setAnimation = (
    element: HTMLDivElement | null,
    skills: SkillInfo[]
) => {
    if (!element) {
        return;
    }

    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 70%",
        },
    });

    skillsTimeline.fromTo(
        element.querySelector(`#riceEducation`),
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.4,
        }
    );
    skillsTimeline.fromTo(
        element.querySelector(`#cguEducation `),
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.4,
        }
    );
    skills.forEach((skill, index) => {
        skillsTimeline.fromTo(
            element.querySelector(`#progressBar${index}`),
            {
                width: 0,
            },
            {
                width: `${skill.score}%`,
                duration: 0.2,
            }
        );
    });
};
