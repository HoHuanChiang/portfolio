import React from "react";
import "./HorizontalProgressBar.css";

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
        boxShadow: `0 0 7px ${props.color},0 0 10px #fff,0 0 21px #fff,0 0 42px ${props.color},0 0 82px ${props.color},0 0 92px ${props.color},0 0 102px ${props.color},0 0 151px ${props.color}`,
    };
    return (
        <div className={"h-progressBar"}>
            <div
                style={innerBarStyles}
                className={"innerProgressBar"}
                id={props.innerContainerId}
            ></div>
        </div>
    );
};

export default HorizontalProgressBar;
