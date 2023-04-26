import React from "react";
import "./MasterLayout.css";

const MasterLayout = () => {
    return (
        <div className={"main"}>
            <div className={"topNavbar"}>Ho Huan Chiang</div>
            <div className={"content"}>
                <div className={"leftNavbar"}>
                    <nav>
                        <div>Home</div>
                        <div>Work Experience</div>
                        <div>Projects</div>
                        <div>Resume</div>
                    </nav>
                </div>
                <div className={"innerContent"}></div>
            </div>
        </div>
    );
};

export default MasterLayout;
