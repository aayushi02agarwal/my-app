import React from "react";
//@ts-ignore
import { ReactComponent as WorkIcon } from "../../assets/work.svg";
//@ts-ignore
import { ReactComponent as SchoolIcon } from "../../assets/school.svg";
import { makeStyles } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    margin: "4",
    position: "relative",
  },
  img: {
    width: "10",
    padding: "1",
    borderRadius: "1px",
    zIndex: 2,
  },
  hiddenSection: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "start",
      width: "44px",
      paddingTop: "0.5px",
      position: "relative",
    },
  },
  timeLine: {
    "@media only screen and (min-width: 1170px)": {
      minWidth: "1144px",
    },
  },
}));

function TimeLine(props: any) {
  const classes = useStyles();
  return (
    <div>
      {/* <VerticalTimeline lineColor={"#505482"} className={classes.timeLine}> */}
      <VerticalTimeline lineColor={"#161B22"} className={classes.timeLine}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "#505482" }}
          contentStyle={{ background: "#161B22" }}
          // contentArrowStyle={{ borderRight: "7px solid #505482" }}
          contentArrowStyle={{ borderRight: "7px solid #161B22" }}
          date={"Aug. 2023 - present"}
          // iconStyle={{ background: "#505482", color: "#fff", fill: "white" }}
          iconStyle={{
            background: "#161B22",
            color: "#5DB3A6",
            fill: "#5DB3A6",
          }}
          style={{ width: "100%" }}
          icon={<WorkIcon />}
        >
          <h2
            className="vertical-timeline-element-title timeLineHeading"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            HPE Aruba Networking, Engineer-1
          </h2>
          <h2
            className="vertical-timeline-element-subtitle"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            Bangalore, India
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - Jul 2023"
          // contentStyle={{ background: "#505482" }}
          contentStyle={{ background: "#161B22" }}
          // contentArrowStyle={{ borderRight: "7px solid #505482" }}
          contentArrowStyle={{ borderRight: "7px solid #161B22" }}
          // iconStyle={{ background: "#505482", color: "#fff", fill: "white" }}
          iconStyle={{
            background: "#161B22",
            color: "#5DB3A6",
            fill: "#5DB3A6",
          }}
          icon={<WorkIcon />}
        >
          <h2
            className="vertical-timeline-element-title"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            HPE Aruba Networking, Intern
          </h2>
          <h2
            className="vertical-timeline-element-subtitle"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            Bangalore, India
          </h2>
          {/* <p style={{color: "#fff"}}>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2022 - Jun 2022"
          // iconStyle={{ background: "#505482", color: "#fff", fill: "white" }}
          // contentStyle={{ background: "#505482" }}
          // contentArrowStyle={{ borderRight: "7px solid #505482" }}
          iconStyle={{
            background: "#161B22",
            color: "#5DB3A6",
            fill: "#5DB3A6",
          }}
          contentStyle={{ background: "#161B22" }}
          contentArrowStyle={{ borderRight: "7px solid #161B22" }}
          icon={<WorkIcon />}
        >
          <h2
            className="vertical-timeline-element-title"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            Techmihirnaik Group, UI Developer
          </h2>
          <h2
            className="vertical-timeline-element-subtitle"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            Remote
          </h2>
          <p>{/* User Experience, Visual Design */}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          // iconStyle={{ background: "#505482", color: "#fff", fill: "white" }}
          // contentStyle={{ background: "#505482" }}
          // contentArrowStyle={{ borderRight: "7px solid #505482" }}
          iconStyle={{
            background: "#161B22",
            color: "#5DB3A6",
            fill: "#5DB3A6",
          }}
          contentStyle={{ background: "#161B22" }}
          contentArrowStyle={{ borderRight: "7px solid #161B22" }}
          icon={<SchoolIcon />}
        >
          <h2
            className="vertical-timeline-element-title"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            Bachelor of Technology in Computer Science
          </h2>
          <h2
            className="vertical-timeline-element-subtitle"
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            JECRC Foundation, Jaipur
          </h2>
          <p
            // style={{ color: "#fff" }}
            style={{ color: "#5DB3A6" }}
          >
            GPA: 8.9/10.0
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default TimeLine;