import gsap from "gsap";
import { NavigateFunction } from "react-router-dom";
import { Path } from "./MasterLayout";
import ScrollTrigger from "gsap/ScrollTrigger";

export const updateBackground = (element: HTMLElement | null) => {
    if (element == null) {
        return;
    }

    const toWorkSectionTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: element.querySelector(".workEpContainer"),
            start: "top 90%",
            end: "top top",
            scrub: true,
        },
    });

    toWorkSectionTimeline.fromTo(
        [
            element.querySelector(".topNavbar"),
            element.querySelector(".leftNavbar"),
        ],
        {
            color: "green",
        },
        {
            color: "white",
        }
    );

    toWorkSectionTimeline.fromTo(
        [
            element.querySelector(
                ".topNavbar .contactInfoContainer .contactInfo .linkedIn"
            ),
            element.querySelector(
                ".topNavbar .contactInfoContainer .contactInfo .email"
            ),
        ],
        {
            fill: "green",
        },
        {
            fill: "white",
        }
    );
};

export const updateName = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }

    gsap.fromTo(
        element.querySelector(".topNavbar .preferName"),
        { bottom: "200px" },
        {
            bottom: "0",
            scrollTrigger: {
                trigger: element.querySelector(".workEpContainer"),
                start: "top 90%",
                end: "top 80%",
                scrub: true,
            },
        }
    );

    gsap.fromTo(
        element.querySelector(".topNavbar .fullName"),
        { opacity: 1 },
        {
            opacity: 0,
            scrollTrigger: {
                trigger: element.querySelector(".workEpContainer"),
                start: "top 90%",
                end: "top 80%",
                scrub: true,
            },
        }
    );
};

export const updateRoutePath = (
    element: HTMLDivElement | null,
    navigate: NavigateFunction
) => {
    if (!element) {
        return;
    }
    ScrollTrigger.create({
        trigger: element.querySelector("#homeSection"),
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => {
            navigate(Path.Home);
        },
        onEnterBack: () => {
            navigate(Path.Home);
        },
    });

    ScrollTrigger.create({
        trigger: element.querySelector("#workSection"),
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => {
            navigate(Path.WorkExperience);
        },
        onEnterBack: () => {
            navigate(Path.WorkExperience);
        },
    });
    ScrollTrigger.create({
        trigger: element.querySelector("#projectSection"),
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => {
            navigate(Path.Projects);
        },
        onEnterBack: () => {
            navigate(Path.Projects);
        },
    });
    ScrollTrigger.create({
        trigger: element.querySelector("#educationSection"),
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => {
            navigate(Path.Education);
        },
        onEnterBack: () => {
            navigate(Path.Education);
        },
    });
};
