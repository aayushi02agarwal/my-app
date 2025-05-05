import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "95vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "lighten",
        alignContent: "flex-start",
    },
    headingSection: {
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
    heading: {
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
    testimonials: {
        display: "flex",
        flexDirection: "column",
        fontSize: "18px",
        padding: "50px 90px 30px 60px",
        height: "70%",
        overflowY: "auto",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            letterSpacing: "0.1px",
            padding: "20px 50px 10px 40px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "18px",
            letterSpacing: "0.3px",
            padding: "30px 70px 20px 40px",
        },
        letterSpacing: "0.5px",
        lineHeight: "1.6",
        gap: "10px"
    },
    card: {
        backgroundColor: "#161B22",
        margin: "4px 16px 15px 16px",
        padding: "26px",
        transform: "skew(-5deg)",
        boxShadow: "10px 10px 0 #5DB3A6"
    },
    quote: {
        fontFamily: "InriaSerif",
        color: "#5DB3A6",
        fontStyle: "italic",
        // clipPath: "polygon(1% 0%, 100% 0%, 99% 100%, 0% 100%)",
        padding: "0px 12px"
    },
    person: {
        fontFamily: "InriaSerif-Bold",
        color: "#5DB3A6",
        textAlign: "right"
    }
}));
const Testimonials = (props: any) => {
    const classes = useStyles();
    const testimonials = [
        {
            para: "Aayushi is one of the few developers I can confidently assign a task to and completely trust that it will be handled end-to-end with precision. Her ownership and execution are truly commendable.",
            name: "UI Lead, HPE"
        },
        {
            para: "Aayushi has been a consistently strong performer. Her dedication, reliability, and positive attitude make her a key contributor to the team’s success.",
            name: "Scrum Master, HPE"
        },
        {
            para: "I've had the pleasure of working alongside Aayushi for the past year and can confidently attest to her talent and dedication as a UI developer. She’s a reliable team member who actively seeks feedback, embraces challenges, and continuously improves her craft. Aayushi's positive attitude, solutions-oriented mindset, and strong sense of initiative make her a valuable asset to any team. I highly recommend her for any UI development role — she will exceed expectations wherever she goes.",
            name: "Mentor, Software Engineer, HPE"
        }
    ]
    return (
        <Grid
            container
            className={classes.container}
            onMouseEnter={() => props.setIsScrollEnabled(false)}
            onMouseLeave={() => props.setIsScrollEnabled(true)}
            onTouchStart={() => props.setIsScrollEnabled(false)}
            onTouchEnd={() => props.setIsScrollEnabled(true)}
        >
            <Grid className={classes.headingSection} xs={12}>
                <h3 className={classes.heading}>What people say?</h3>
            </Grid>
            <Grid className={classes.testimonials} xs={12}>
                {testimonials.map((value) => (
                    <div className={classes.card}>
                        <div className={classes.quote}>"{value.para}"</div>
                        <div className={classes.person}>- {value.name}</div>
                    </div>
                ))}
            </Grid>
        </Grid>
    )
}
export default Testimonials;