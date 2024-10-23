import React, { useRef } from "react";
import "./WorkExperience.css";
import { setAnimation } from "./WorkExperience.trigger";
import { COMPANIES, CompanyInfo } from "./WorkExperience.util";

const WorkExperience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  React.useEffect(() => {
    setAnimation(ref.current, windowSize.current[0]);
  }, [windowSize]);

  const renderCompany = (company: CompanyInfo, showTimelineLink: boolean) => {
    return (
      <div className={`${company.id} companyContainer`}>
        <div className={"workTimeline"} id={`${company.id}Timeline`}>
          <div className={"stick"} />
          <div className={"topDot"} />
          <div className={"bottomDot"} />
          <span className={"topDate"}>{company.endDate}</span>
          <span className={"bottomDate"}>{company.startDate}</span>
          {showTimelineLink && <div className={"freeTimeline"} />}
        </div>
        <div className={"linkToTimeline"} />
        <div className={"company"}>
          <div className={"companyContent"}>
            <div className={"title"}>{company.name}</div>
            <div className={"position"}>
              <div>{company.title}</div>
              <div>{company.location}</div>
            </div>
            <div>{company.description}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={"workEpContainer"} ref={ref} id={"workSection"}>
      <div className={"sectionTitle"}>Work Experience</div>
      <div className={"companies"}>
        {COMPANIES.map((company, index) => renderCompany(company, index !== COMPANIES.length - 1))}
      </div>
    </div>
  );
};

export default WorkExperience;
