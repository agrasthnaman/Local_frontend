// import React from "react";  
// import React, {useState, useEffect} from "react";
import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import cover from "../images/image.jpg";
import cover2 from "../images/cover.svg";
import wave2 from "../images/svg/wave2.svg";


const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "20vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    paddingBottom: 50,
    height: "180px",
    zIndex: 10
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#a2d9ff",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,

  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    display: "block",
   marginLeft: "auto",
   marginRight: "auto",
    zIndex:"-50",
    height: "100%",
    width: "100%"
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#a2d9ff",
    marginTop: 30,
  },
  wave:{
    width: '100%',
    textAlign: "center",
    zIndex: -100,
  }
}));

const HomeStart = () => {
  const classes = useStyles();
  return (
    <>
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Vocal for
        </Typography>
        <Typography className={classes.delivery} noWrap>
          LOCAL
        </Typography>
        {/* <div className={classes.textE}>And I'm a <span className={classes.typing}></span></div> */}
        <Typography variant="body2" className={classes.paragraph}>
          As we stay at home to blunt the impact of the virus
          for our first responders and essential workers,
          have turned to delivery services for meals and groceries. 
          The hospitality industry has adjusted to make it easier for everyone to support
          a favorite local Stores, avoid going out and simply get a comforting
          respite in these stressful times.
        </Typography>
        <Button variant="outlined" className={classes.ctaOrder}>
          ORDER NOW
        </Button>
      </div>
      <div className={classes.cover}>
        <img src={cover2} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
    <img src={wave2} className={classes.wave} alt="" />
    </>
  )
};

export default React.memo(HomeStart);
