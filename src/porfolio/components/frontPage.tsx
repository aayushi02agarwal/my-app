import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import myPic from "../../assets/myPic3.png";
// @ts-ignore
import codeBox from "../../assets/Codesandbox.png";
// @ts-ignore
import resume from "../../assets/resume.svg";
// @ts-ignore
import project from "../../assets/projectIcon.svg";
// @ts-ignore
import connect from "../../assets/connect.svg";
// @ts-ignore
import about from "../../assets/about-me.svg";
// @ts-ignore
import experience from "../../assets/experience.svg";
// @ts-ignore
import links from "../../assets/linksIcon.svg";
// @ts-ignore

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    // v2
    background: "#0D1117",
  },
  rightPanel: {
    height: "100vh",
    width: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    color: "#D3D3D3",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "none",
    },
    fontSize: "20px",
    fontFamily: "InriaSerif-Bold",
    "& .face": {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      height: "300px",
      border: "2px solid #5DB3A6",
      boxSizing: "border-box",
      backgroundColor: "rgba(0, 77, 77, 0.6)",
    },
    "& .cube": {
      width: "300px",
      height: "300px",
      transformStyle: "preserve-3d",
    },
    "& .front": {
      transform: "translateZ(150px)",
    },
    "& .left": {
      transform: "rotateY(-90deg) translateZ(150px)",
    },
    "& .back": {
      transform: "rotateY(180deg) translateZ(150px)",
    },
    "& .right": {
      transform: "rotateY(90deg) translateZ(150px)",
    },
    "& .top": {
      transform: "rotateX(90deg) translateZ(150px)",
    },
    "& .bottom": {
      transform: "rotateX(-90deg) translateZ(150px)",
    },
    perspective: "1000px", // how far is the object from viewer
  },
  leftPanel: {
    position: "relative",
    left: "10%",
    top: "250px",
    [theme.breakpoints.down("sm")]: {
      left: "20%",
      top: "30%",
      minWidth: "100%",
      lineHeight: "40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      left: "20%",
      top: "30%",
      minWidth: "100%",
      lineHeight: "50px",
    },
    lineHeight: "60px",
  },
  heading: {
    fontFamily: "InriaSerif-Bold",
    color: "#D3D3D3",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "30px",
    },
  },
  subheading: {
    fontFamily: "Montserrat-Bold",
    color: "#D3D3D3",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "30px",
    },
  },
}));

const FrontPage = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    const cube = document.querySelector(".cube") as HTMLElement | null;

    if (!cube) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const rotateX = -(mouseY / window.innerHeight - 0.5) * 270;
      const rotateY = (mouseX / window.innerWidth - 0.5) * 270;
      if (cube) {
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <Grid container className={classes.container} id={props.selectedTab}>
        <Grid xs={6} className={classes.leftPanel}>
          {/* <img src={myPic} alt="My Image" style={{ width: "100%" }} /> */}
          <div className={classes.heading}>
            Hi👋, My Name is <br></br>
            <span className={classes.subheading}>{" Aayushi Agarwal"}</span>
          </div>

          <div className={classes.heading}>I'm a Software Engineer 👩‍💻</div>

          <div className="buttonStyle">
            <button onClick={() => props.setSelectedTab(1)}>Know More</button>
          </div>
        </Grid>
        <Grid xs={6} className={classes.rightPanel}>
          <div className="cube">
            <div className="face front">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={about} />
              </div>
              <div>About Me</div>
            </div>
            <div className="face back">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={links} />
              </div>
              <div>Links</div>
            </div>
            <div className="face left">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={project} />
              </div>
              <div>Projects</div>
            </div>
            <div className="face right">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={experience} />
              </div>
              <div>Experience</div>
            </div>
            <div className="face top">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={resume} />
              </div>
              <div>Resume</div>
            </div>
            <div className="face bottom">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={connect} />
              </div>
              <div>Let's Connect</div>
            </div>
          </div>
          {/* <img
            src={codeBox}
            className="codeBoxLogo"
            alt="My Image"
            style={{ width: "100%" }}
          /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default FrontPage;
