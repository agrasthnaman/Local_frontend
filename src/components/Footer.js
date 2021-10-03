import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import Cloud from "../components/svg/media/Cloud.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    backgroundColor: "#101522",
    marginTop: 40,
    height: "42vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    // ["@media (max-width:1024px)"]: {
    //   flexDirection: "column",
    // },
  },
  input:{
    color:"white",
    backgroundColor:"white",
    borderRadius: "25px",

  },
  innerCont: {
    //display: "grid",
    //position: 'relative',
    //flexDirection: "column",
    //justifyContent: " flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color:"white",
    margin: "74px 40px 40px 40px",
  },
  resources: {
    display: "flex",
    position: 'relative',
    flexDirection: "column",
    justifyContent: " flex-start",
    color:"white",
    margin: "60px 40px 10px 40px",
  },
  buttonStyleOne: {
    //backgroundColor: "#a2d9ff",
    color:"white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
  },
  webfooter:{
    backgroundColor: "#101522",
    display: "flex",
    textAlign: 'center',
    color: "#fff",
    //marginBottom: "16px",
    //marginLeft:"50%"   
    
  },
  f_text:{
    marginLeft:"50%",
  },
  sec: {
    display: "flex",
    position: 'relative',
    flexDirection: "column",
  },
  SocialIcon:{
    display: "block",
    float: "left",
    //marginRight: "5px",
    color: "#fff",
    fontSize: "24px",
  },
  SocialIconLink:{
    color: "#fff",
    padding:"8px",
    //display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "240px",
  }
}));

export default function Footer() {
  const { authenticated } = useSelector((state) => state.auth);
  const classes = useStyles();
  return (
    <>
    <Grid container direction="row" className={classes.container}>
      
      <Grid item xs={12} sm={4} className={classes.innerCont}>
        {authenticated ? (
          <Grid container direction="row">
            <Grid item xs={12} sm={6} className={classes.sec}>
              <Typography variant="h5" component="p">
                Company
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - About <br />
                - Blog <br />
                - Careers <br />
                - Contact <br />
                - Report Fraud <br />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.sec}>
              <Typography variant="h5" component="p">
                For You
              </Typography>
              <Typography variant="body1" component="p">
                <br />
                - Privacy <br />
                - Terms <br />
                - Security <br />
                - Sitemap <br />
                - Code of conduct <br />
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <div className={classes.sec}>
            <Typography variant="h6" component="p">
              Local for Business
            </Typography>
            <Typography variant="body1" component="p" >
              Get more out of your business, without losing focus on what is
              most important — delighting your customers
            </Typography>
            <br />
            <Link to="/addrestaurant">
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={3} className={classes.innerCont}>
        <Typography variant="h5" component="p">
          Local NewsLetter
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 28 }}>
          Stay updated with new offers from Local
        </Typography>
        <TextField label="Your Email address" variant="outlined" className={classes.input}/>
        <Button className={classes.buttonStyleTwo}>SEND</Button>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.resources}>
        {/* <Typography variant="h5" component="p">
          Heading
        </Typography> */}
        <div className={classes.sec}>
        <Typography variant="body1" component="p" style={{ marginBottom: 28 }}>
          <br />
          - Get Help <br />
          - About Us <br />
          - Create business account <br />
          - Stores near me <br />
          - Contact Us <br />
        </Typography>
        <div className={classes.SocialIcon}>
          <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Facebook">
              <FaFacebook />
          </a>
          <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Instagram">
              <FaInstagram />
          </a>
          <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Twitter">
              <FaTwitter />
          </a >
          <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Linkedin">
              <FaLinkedin />
          </a>
      </div>
      </div>
      </Grid>
      
    </Grid>
    <div className={classes.webfooter}>
    <p  className={classes.f_text}>Local © {new Date().getFullYear()}
    All rights reserved.</p>
</div>
</>
  );
}
