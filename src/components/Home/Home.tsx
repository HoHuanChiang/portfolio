import React from "react";
import EngineerTextAnimationGroup from "./EngineerTextAnimationGroup/EngineerTextAnimationGroup";
import "./Home.css";

const Home = () => {
    return (
        <div className={"homeContainer"} id={"homeSection"}>
            <div className={"aboutMe"}>
                <EngineerTextAnimationGroup
                    textGroup={[
                        "Hi, I'm Ho-Huan Chiang or you can call me Lars!",
                        "I am an experienced software engineer actively seeking new opportunities in the field.",
                        "I am constantly striving to learn and grow in my field, and I am excited to bring my expertise to new projects and challenges.",
                    ]}
                />
            </div>
        </div>
    );
};

export default Home;
