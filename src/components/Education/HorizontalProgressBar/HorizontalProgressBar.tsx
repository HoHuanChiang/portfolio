import React from "react";
import "./HorizontalProgressBar.css";

interface HorizontalProgressBarProps {
    max: number;
    value: number;
    color: string;
}

const HorizontalProgressBar = (props: HorizontalProgressBarProps) => {
    const widthPecentage = (props.value * 100) / props.max;
    const innerBarStyles: React.CSSProperties = {
        height: "100%",
        width: `${widthPecentage}%`,
        background: props.color,
    };
    return (
        <div className={"h-progressBar"}>
            <div
                style={innerBarStyles}
                className={"progressBarAnimation"}
            ></div>
        </div>
    );
};

export default HorizontalProgressBar;
