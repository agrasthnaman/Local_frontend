// import React from "react";  
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import cover from "../images/image.jpg";
import shop from "../images/svg/shop.svg";
import onlineW from "../images/svg/onlineW.svg";
import wave2 from "../images/svg/wave2.svg";


const useStyles = makeStyles((theme) => ({
  presentation: {
    justifyContent: "space-evenly",
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
  introduction1: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingLeft: 300,
    paddingBottom: 50,
    height: "180px",
    zIndex: 10
  },
  // ["@media (max-width:920px)"]: {
  //   paddingLeft: 0,
  //   paddingBottom: 50,
  //   height: "120px",
    
  // },
  introduction: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingLeft: 60,
    paddingBottom: 50,
    height: "180px",
    zIndex: 10
  },
  safeFood: {
    fontSize: 60,
    fontWeight: 300,
  },
  delivery: {
    color: "#4682B4",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  ["@media (max-width:920px)"]: {
    fontSize: 10,
    marginTop: -10,
    marginBottom: 10,
    
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    justifyContent: "space-evenly",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
    zIndex: 10,
  },
  coverImg: {
    display: "block",
   marginLeft: "auto",
   marginRight: "auto",
    zIndex:"-50",
    height: "100%",
    width: "100%"
  },
  online: {
    justifyContent: "space-evenly",
    display: "block",
   marginLeft: "100px",
//    marginRight: "auto",
    zIndex:"-50",
    height: "100%",
    width: "100%",
    ["@media (max-width:920px)"]: {
      height: "400px",
      width: "400px",
      
    },
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
  },
}));

const Infosection = () => {
  const classes = useStyles();
  return (
    <>
    <section className={classes.presentation}>
    <div className={classes.cover}>
        <img src={onlineW} alt="safe-delivery" className={classes.online} />
      </div>
      <div className={classes.introduction1}>
        <Typography className={classes.safeFood} noWrap>
          Welcome to 
        </Typography>
        <Typography className={classes.delivery} noWrap>
          Online World
        </Typography>
        <Typography variant="body2" className={classes.paragraph}> 
          Your Locality is Online now.
          Just enter your Location and check out your 
          online Locality NOW.
        </Typography>
        <Link to="/register">
              <Button variant="outlined" className={classes.ctaOrder}>Register Now</Button>
            </Link>
        {/* <Button variant="outlined" className={classes.ctaOrder}>
          ORDER NOW
        </Button> */}
      </div>
      
    </section>
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Give your business 
        </Typography>
        <Typography className={classes.delivery} noWrap>
          a Online Platform
        </Typography>
        <Typography variant="body2" className={classes.paragraph}> 
          The hospitality industry has adjusted to make it easier for everyone to support
          a favorite local Stores, avoid going out and simply get a comforting
          respite in these stressful times.
        </Typography>
        <Link to="/addrestaurant">
              <Button variant="outlined" className={classes.ctaOrder}>Join Now</Button>
            </Link>
        {/* <Button variant="outlined" className={classes.ctaOrder}>
          ORDER NOW
        </Button> */}
      </div>
      <div className={classes.cover}>
        <img src={shop} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
    <img src={wave2} className={classes.wave} alt="" />
    </>
  )
};

export default React.memo(Infosection);
