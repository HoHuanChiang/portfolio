import gsap from "gsap";

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
            markers: true,
        },
    });
    // toWorkSectionTimeline.fromTo(
    //     "body",
    //     { backgroundColor: "green" },
    //     {
    //         // background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    //         background: "white",
    //     }
    // );
    toWorkSectionTimeline.to(element.querySelector(".topNavbar"), {
        fontFamily: "Vibur",
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
            textShadow:
                "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
        }
    );
};
