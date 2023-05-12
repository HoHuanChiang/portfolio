import React from "react";
import "./HorizontalProgressBar.css";
import { getBoxShadowColor } from "../../../utils/color.util";

interface HorizontalProgressBarProps {
    max: number;
    value: number;
    color: string;
    innerContainerId?: string;
}

const HorizontalProgressBar = (props: HorizontalProgressBarProps) => {
    const widthPecentage = (props.value * 100) / props.max;
    const innerBarStyles: React.CSSProperties = {
        height: "100%",
        width: `${widthPecentage}%`,
        background: props.color,
        boxShadow: getBoxShadowColor(props.color),
    };

    return (
        <div className={"progressBarContainer"}>
            <div
                style={innerBarStyles}
                className={"innerProgressBar"}
                id={props.innerContainerId}
            ></div>
        </div>
    );
};

export default HorizontalProgressBar;
