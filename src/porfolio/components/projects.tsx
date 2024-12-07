import React from "react";
// @ts-ignore
import aboutMe from "../../assets/aboutMe.png";
import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import project1 from "../../assets/project1.png";
// @ts-ignore
import project2 from "../../assets/project2.png";
import { BorderBottom, Height } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    // backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${aboutMe})`,
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundBlendMode: "lighten", // Lightens the image with the gradient
    alignContent: "flex-start",
    overflowY: "auto",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "1fr",
      justifyItems: "center",
    },
    // [theme.breakpoints.between("sm", "md")]: {
    //   display: "grid",
    //   gridTemplateColumns: "1fr",
    // },
    // backgroundColor: "rgba(80, 84, 130, 0.7)",
  },
  projectHeading: {
    position: "relative",
    display: "flex",
    justifyContent: "flexStart",
    flexDirection: "column",
    alignItems: "center",
    // [theme.breakpoints.down('sm')]: {
    //     height: "50vh",
    //     padding: "100px 80px 30px 80px"
    // },
    padding: "120px 60px 30px 60px",
  },
  aboutHeading: {
    // fontFamily: "InriaSans-Bold",
    // color: "#505482",
    fontFamily: "Montserrat-SemiBold",
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
  project: {
    backgroundColor: "#161B22",
    padding: "45px",
    marginRight: "20px",
    marginLeft: "20px",
    fontFamily: "InriaSerif-Bold",
    color: "#5DB3A6",
    position: "relative",
    "&:hover $overlay": {
      opacity: 1,
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginBottom: "20px",
      marginLeft: "32px",
    },
  },
  pager: {
    display: "flex",
    flexDirection: "row",
    width: "15%",
    height: "fit-content",
    transform: "rotate(-90deg)",
    // paddingRight: "30px",
    // paddingTop: "25%",
    position: "absolute",
    top: "80%",
    left: "80%",
    fontSize: "15px",
    "&:before": {
      content: '""',
      flex: "1 1",
      borderBottom: "2px solid #5DB3A6",
      // margin: "auto",
      height: "0px",
      paddingTop: "11px",
    },
  },
  overlay: {
    position: "absolute",
    transition: "0.7s ease",
    opacity: "0",
    width: "0",
    height: "100%",
    bottom: "0",
    left: "0px",
    // backgroundColor: "#5DB3A6",
    backgroundColor: "rgba(0, 77, 77, 0.6)",
    color: "#5DB3A6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "20px",
  },
  heading: {
    fontSize: "20px",
    paddingTop: "30px",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
  },
  subHeading: {
    fontSize: "15px",
    paddingTop: "10px",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.between("sm", "md")]: {},
  },
  knowMoreButton: {
    backgroundColor: "white",
    padding: "8px",
  },
}));

const mapping = [
  {
    key: "01",
    image: project1,
    heading: "ATLANTA - The city of Lifestyle!",
    subHeading: "TechTogether Atlanta Hackathon",
    link: "https://devpost.com/software/all-about-atlanta",
  },
  {
    key: "02",
    image: project2,
    heading: "FemPower - Together, we’re stronger!",
    subHeading: "TechTogether Atlanta Hackathon",
    link: "https://devpost.com/software/fempower-r3pl8c",
  },
];
const Projects = (props: any) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid className={classes.projectHeading} xs={12}>
          <h3 className={classes.aboutHeading}>Projects</h3>
        </Grid>
        {mapping.map((project: any) => {
          return (
            <Grid className={classes.project} xs={4}>
              <div style={{ overflow: "hidden" }}>
                <img src={project.image} style={{ minWidth: "100%" }} />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <p className={classes.heading}>{project.heading}</p>
                    <p className={classes.subHeading}>{project.subHeading}</p>
                  </div>
                  <div className={classes.pager}>
                    <p style={{ paddingLeft: "10px" }}>{project.key}</p>
                  </div>
                </div>

                <div className={classes.overlay}>
                  <a href={project.link} target="blank">
                    <button className={classes.knowMoreButton}>
                      {"Know more"}
                    </button>
                  </a>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
