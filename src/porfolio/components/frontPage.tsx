import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
// @ts-ignore
import connect from "../../assets/connect.svg";
// @ts-ignore
import react from "../../assets/frontPage-icons/react.svg";
// @ts-ignore
import javascript from "../../assets/frontPage-icons/javascript.svg";
// @ts-ignore
import typescript from "../../assets/frontPage-icons/typescript.svg";
// @ts-ignore
import redux from "../../assets/frontPage-icons/redux.svg";
// @ts-ignore
import html from "../../assets/frontPage-icons/html.svg";
// @ts-ignore
import css from "../../assets/frontPage-icons/css.svg";
// @ts-ignore
import angular from "../../assets/frontPage-icons/angular.svg";
// @ts-ignore
import cpp from "../../assets/frontPage-icons/c++.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "95vh",
    // v2
    background: "#0D1117",
  },
  rightPanel: {
    height: "100vh",
    width: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#D3D3D3",
    gap: "110px",
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
    "& .cubeCaption": {
      opacity: "0.6",
      fontSize: "16px",
      letterSpacing: "1px",
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
                <img src={react} />
              </div>
              <div>React</div>
            </div>
            <div className="face back">
              <div style={{ maxWidth: "20%", maxHeight: "20%", display: "flex", gap: "5px", justifyContent: "center" }}>
                <img src={javascript} /><img src={typescript} />
              </div>
              <div>JavaScript/TypeScript</div>
            </div>
            <div className="face left">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={redux} />
              </div>
              <div>Redux</div>
            </div>
            <div className="face right">
              <div style={{ maxWidth: "20%", maxHeight: "20%", display: "flex", gap: "5px", justifyContent: "center" }}>
                <img src={html} />
                <img src={css} />
              </div>
              <div>HTML/CSS</div>
            </div>
            <div className="face top">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={angular} />
              </div>
              <div>Angular</div>
            </div>
            <div className="face bottom">
              <div style={{ maxWidth: "20%", maxHeight: "20%" }}>
                <img src={cpp} />
              </div>
              <div>C/C++</div>
            </div>
          </div>
          <div className="cubeCaption">UI Developer. Problem Solver. Design-Driven Coder.</div>
        </Grid>
      </Grid>
    </>
  );
};

export default FrontPage;
