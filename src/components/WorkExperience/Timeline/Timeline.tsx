import React from "react";
import "./Timeline.css";

const Timeline = () => {
    return (
        <div className={"timelineContainer"}>
            <div className={"workTimeline"} id={"catchpointTimeline"}>
                <div className={"stick"} />
                <div className={"topDot"} />
                <div className={"bottomDot"} />
                <span className={"topDate"}>April. 2023</span>
                <span className={"bottomDate"}>Jun. 2021</span>
            </div>
            <div className={"freeTimeline"} id={"catchpointNextTimeline"} />
            <div className={"workTimeline"} id={"cguTimeline"}>
                <div className={"stick"} />
                <div className={"topDot"} />
                <div className={"bottomDot"} />
                <span className={"topDate"}>Jul. 2020</span>
                <span className={"bottomDate"}>Aug. 2019</span>
            </div>
            <div className={"freeTimeline"} id={"cguNextTimeline"} />
            <div className={"workTimeline"} id={"kersonTimeline"}>
                <div className={"stick"} />
                <div className={"topDot"} />
                <div className={"bottomDot"} />
                <span className={"topDate"}>Aug. 2018</span>
                <span className={"bottomDate"}>Jul. 2018</span>
            </div>
        </div>
    );
};

export default Timeline;
