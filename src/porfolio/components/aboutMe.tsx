import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import { aboutMeText } from "../data/data";
// @ts-ignore

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
  aboutHeadingSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "120px 60px 30px 60px",
    [theme.breakpoints.down("sm")]: {
      padding: "80px 40px 10px 40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: "110px 60px 30px 60px",
    },
  },
  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    height: "70%",
    overflowY: "auto",
  },
  aboutSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 60px 30px 60px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 10px 40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: "30px 40px 20px 40px",
    },
    // height: "70%",
    // overflowY: "auto",
  },
  aboutHeading: {
    // fontFamily: "InriaSans-Bold",
    fontFamily: "Montserrat-SemiBold",
    // color: "#5DB3A6",
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
  aboutText: {
    fontFamily: "InriaSerif-Bold",
    color: "#36454F",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      letterSpacing: "0.1px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "18px",
      letterSpacing: "0.3px",
    },
    letterSpacing: "0.5px",
    lineHeight: "1.6",
    "& a": {
      color: "inherit",
      fontFamily: "InriaSerif-Bold",
    },
  },
  skillsPart: {
    background: "#white",
    fontFamily: "InriaSerif-Bold",
    color: "#36454F",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      padding: "15px",
      letterSpacing: "0.5px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "16px",
      padding: "20px",
      letterSpacing: "1px",
    },
    letterSpacing: "1.5px",
    lineHeight: "1.6",
    maxWidth: "100%",
    padding: "25px",
    borderLeft: "3px solid #5DB3A6",
    "& .skillValues": {
      // background: "#DADBE5",
      background: "#5DB3A6",
      // color: "#505482",
      color: "white",
      padding: "1px 6px",
      margin: "4px 4px",
      display: "inline-block",
      borderRadius: "10px",
      // flexWrap: "wrap",
    },
    "& li": {
      marginBottom: theme.spacing(3), // Adjust the spacing as needed
      "&:last-child": {
        marginBottom: 0,
      },
    },
    "& ul": {
      paddingTop: "15px",
    },
  },
  skillsPartHeading: {
    // color: "#505482",
    color: "#5DB3A6",
    position: "relative",
    top: "25px",
    // background: "#F7F6FD",
    background: "white",
    zIndex: 2,
    fontFamily: "InriaSerif-Bold",
    padding: "8px",
    // border: "2px solid #505482",
    border: "2px solid #5DB3A6",
  },
}));
const skills = [
  {
    skill: "Programming Languages",
    values: ["C/C++", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
  },
  {
    skill: "Frameworks/ Libraries",
    values: ["React", "Redux", "Angular"],
  },
  {
    skill: "Others",
    values: ["OOP", "Git", "DSA", "OS"],
  },
];
const AboutMe = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.container}
        onMouseEnter={() => props.setIsScrollEnabled(false)}
        onMouseLeave={() => props.setIsScrollEnabled(true)}
        onTouchStart={() => props.setIsScrollEnabled(false)}
        onTouchEnd={() => props.setIsScrollEnabled(true)}
      >
        <Grid className={classes.aboutHeadingSection} xs={12}>
          <h3 className={classes.aboutHeading}>So, who am I?</h3>
        </Grid>
        <div className={classes.aboutContainer}>
          <Grid
            className={classes.aboutSection}
            // style={{ paddingTop: "50px" }}
            xs={8}
          >
            <div className={classes.aboutText}>
              {aboutMeText.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div style={{ paddingTop: "20px" }}>
                <a
                  href="https://drive.google.com/file/d/1a_GNiKdaKCgaphPgOCdyhExdqS5SwSXA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#36454F" }}
                >
                  {/* <CustomIcon component={LinkIcon} style={{color: "#505482"}}/> */}
                  🔗 <span style={{ textDecoration: "underline" }}>Resume</span>
                </a>
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.aboutSection}
            style={{ paddingTop: "50px" }}
            xs={4}
          >
            {/* <div className={classes.skillsPartHeading}>Skills</div> */}
            <div className={classes.skillsPart}>
              <ul>
                <>
                  {skills.map((skill: any) => {
                    return (
                      <li>
                        <div>{skill.skill}</div>
                        <div>
                          {skill.values.map((val: any) => {
                            return <span className="skillValues">{val}</span>;
                          })}
                        </div>
                      </li>
                    );
                  })}
                </>
              </ul>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default AboutMe;
