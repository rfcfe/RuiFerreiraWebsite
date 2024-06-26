import React from "react";
import "./about.css";
import { about } from "../../assets/data/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

export const Experience = () => {
  return (
    <div className="experience-section">
      <div className="university">
        <h2 className="exp-title">Education</h2>
        <div className="left_experience">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              contentStyle={{ background: "rgb(16,22,36)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date={about.master}
              iconStyle={{ background: "rgb(16,22,36)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{about.uni}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Master's in {about.course}
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--right"
              contentStyle={{ background: "rgb(16,22,36)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date={about.bach}
              iconStyle={{ background: "rgb(16,22,36)", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">{about.uni}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor's in {about.course}
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <div className="professional">
        <h2 className="exp-title">Professional Experience</h2>
        {/* <VerticalTimeline>
          <VerticalTimelineElement
          >
          </VerticalTimelineElement>
        </VerticalTimeline> */}
      </div>
    </div>
  );
};
