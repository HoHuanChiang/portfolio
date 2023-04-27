import React from "react";
import "./Timeline.css";

const Timeline = () => {
    return (
        <div className={"timelineContainer"}>
            <div className={"workTimeline"}>
                <div />
                <span>April. 2023</span>
                <span>Jun. 2021</span>
            </div>
            <div className={"freeTimeline"} />
            <div className={"workTimeline"}>
                <div />
                <span>Jul. 2020</span>
                <span>Aug. 2019</span>
            </div>
            <div className={"freeTimeline"} />
            <div className={"workTimeline"}>
                <div />
                <span>Aug. 2018</span>
                <span>Jul. 2018</span>
            </div>
        </div>
    );
};

export default Timeline;
