import gsap, { Power3 } from "gsap";

export const setAnimation = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }
    const animationT1 = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 15%",
        },
    });

    const eachCompanyAnimationSpeed = 0.2;
    const companyClassIds = [
        {
            timelineId: "catchpointTimeline",
            containerClassId: "company.catchpoint",
            nextTimelineId: "catchpointNextTimeline",
        },
        {
            timelineId: "cguTimeline",
            containerClassId: "company.cgu",
            nextTimelineId: "cguNextTimeline",
        },
        {
            timelineId: "kersonTimeline",
            containerClassId: "company.kerson",
        },
    ];

    companyClassIds.forEach((companyInfo, index) => {
        if (element === null) {
            return;
        }
        animationT1.fromTo(
            element.querySelector(`#${companyInfo.timelineId} .topDot`),
            {
                transform: "scale(0)",
            },
            {
                transform: "scale(1)",
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );

        animationT1.fromTo(
            element.querySelector(`#${companyInfo.timelineId} .topDate`),
            { opacity: 0, y: -100 },
            { opacity: 1, y: 0, ease: Power3.easeIn }
        );
        animationT1.fromTo(
            element.querySelector(`#${companyInfo.timelineId} .stick`),
            {
                height: 0,
            },
            {
                height: "200px",
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );

        animationT1.fromTo(
            element.querySelector(`#${companyInfo.timelineId} .bottomDot`),
            {
                transform: "scale(0)",
            },
            {
                transform: "scale(1)",
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );

        animationT1.fromTo(
            element.querySelector(`#${companyInfo.timelineId} .bottomDate`),
            { opacity: 0, y: -100 },
            {
                opacity: 1,
                y: 0,
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );

        animationT1.fromTo(
            element.querySelector(
                `.${companyInfo.containerClassId} .linkToTimeline`
            ),
            {
                width: 0,
            },
            {
                width: `calc(200px + ${index * 15}vw)`,
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );
        animationT1.fromTo(
            element.querySelector(
                `.${companyInfo.containerClassId} .companyContent`
            ),
            {
                opacity: 0,
            },
            {
                opacity: 1,
                ease: Power3.easeIn,
                duration: eachCompanyAnimationSpeed,
            }
        );

        if (companyInfo.nextTimelineId) {
            animationT1.fromTo(
                element.querySelector(`#${companyInfo.nextTimelineId}`),
                {
                    height: 0,
                },
                {
                    height: "50px",
                    duration: eachCompanyAnimationSpeed,
                }
            );
        }
    });
};
