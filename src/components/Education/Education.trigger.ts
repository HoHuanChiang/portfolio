import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SkillInfo } from "./Education";

export const setAnimation = (
    element: HTMLDivElement | null,
    skills: SkillInfo[]
) => {
    if (!element) {
        return;
    }
    // ScrollTrigger.create({
    //     trigger: element,
    //     start: "top 40%",
    //     end: "top top",

    //     onEnter: () => {
    //         element
    //             .querySelector("#riceEducation")
    //             ?.classList.add("educationItemBlinking");
    //     },
    // });

    // ScrollTrigger.create({
    //     trigger: element,
    //     start: "top 30%",
    //     end: "top top",
    //     onEnter: () => {
    //         element
    //             .querySelector("#cguEducation")
    //             ?.classList.add("educationItemBlinking");
    //     },
    // });

    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 20%",
        },
    });

    skillsTimeline.fromTo(
        element.querySelector(`#riceEducation`),
        {
            opacity: 0,
        },
        {
            opacity: 1,
            boxShadow:
                "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #9aff03,0 0 52px #9aff03,0 0 62px #9aff03,0 0 78px #9aff03",
        }
    );
    skillsTimeline.fromTo(
        element.querySelector(`#cguEducation `),
        {
            opacity: 0,
        },
        {
            opacity: 1,
            boxShadow:
                "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #9aff03,0 0 52px #9aff03,0 0 62px #9aff03,0 0 78px #9aff03",
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
            }
        );
    });
    skillsTimeline.totalDuration(4);
};
