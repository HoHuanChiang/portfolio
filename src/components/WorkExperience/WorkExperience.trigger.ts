import gsap, { Power3 } from "gsap";

export const setAnimation = (element: HTMLElement | null, windowWidth: number) => {
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
      timelineId: "tabapayTimeline",
      containerClassId: "tabapay",
    },
    {
      timelineId: "catchpointTimeline",
      containerClassId: "catchpoint",
    },
    {
      timelineId: "cguTimeline",
      containerClassId: "cgu",
    },
    {
      timelineId: "kersonTimeline",
      containerClassId: "kerson",
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
        height: "100%",
        duration: eachCompanyAnimationSpeed,
        ease: Power3.easeIn,
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
      element.querySelector(`.${companyInfo.containerClassId} .linkToTimeline`),
      {
        width: 0,
        minWidth: 0,
      },
      {
        width: `calc(200px + ${index * 15}%)`,
        minWidth: "150px",
      }
    );

    animationT1.fromTo(
      element.querySelector(`.${companyInfo.containerClassId} .companyContent`),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: Power3.easeIn,
        duration: eachCompanyAnimationSpeed,
      }
    );

    if (index !== companyClassIds.length - 1) {
      animationT1.fromTo(
        element.querySelector(`.${companyInfo.containerClassId} .freeTimeline`),
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
