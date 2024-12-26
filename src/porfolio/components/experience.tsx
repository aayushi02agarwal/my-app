import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import aboutMe from "../../assets/aboutMe.png";
import { aboutMeText } from "../data/data";
// @ts-ignore
import { ReactComponent as LinkIcon } from "../../assets/link.svg";
import { CustomIcon } from "../common/customIcon";
import TimeLine from "../common/timeLine";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "95vh",
    // backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${aboutMe})`,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundBlendMode: "lighten", // Lightens the image with the gradient
    alignContent: "flex-start",
    // overflowY: "auto",
    // backgroundColor: "rgba(80, 84, 130, 0.7)",
  },
  aboutSection: {
    position: "relative",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "80px 40px 10px 40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: "110px 60px 30px 60px",
    },
    padding: "120px 60px 30px 60px",
  },
  aboutHeading: {
    // fontFamily: "InriaSans-Bold",
    fontFamily: "Montserrat-SemiBold",
    // color: "#505482",
    color: "#333333",
    fontSize: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "40px",
    },
    margin: "20px 0px 0px 0px",
  },
  timeLineSection: {
    position: "relative",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "center",
    // [theme.breakpoints.down('sm')]: {
    //     height: "50vh",
    //     padding: "100px 80px 30px 80px"
    // },
    padding: "40px 60px 30px 60px",
    fontFamily: "InriaSerif-Bold",
    // color: "#505482",
    color: "#161B22",
    height: "70%",
    overflowY: "auto"
  },
}));

const Experience = (props: any) => {
  const classes = useStyles();
  return (
    <>
      {/* <ScrollLock isActive> */}
      <Grid
        container
        className={classes.container}
        onMouseEnter={() => props.setIsScrollEnabled(false)}
        onMouseLeave={() => props.setIsScrollEnabled(true)}
        onTouchStart={() => props.setIsScrollEnabled(false)}
        onTouchEnd={() => props.setIsScrollEnabled(true)}
      >
        <Grid className={classes.aboutSection} xs={12}>
          <h3 className={classes.aboutHeading}>Experience</h3>
        </Grid>
        <Grid className={classes.timeLineSection} xs={12}>
          <TimeLine />
        </Grid>
      </Grid>
      {/* </ScrollLock> */}
    </>
  );
};

export default Experience;
