import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import Head_wave from "./svg/Head_wave.jsx"
import Head_wave2 from "./svg/Head_wave2"
//material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logoutAction } from "../redux/actions/authActions";
import Logo from "../images/logo3.png"

const useStyles = makeStyles(() => ({
  appBar: {
    position: "fixed",
    zIndex: 100,
    // backgroundColor: "transparent",
    backgroundColor: "#a2d9ff",
    backgroundImage: "linear-gradient(315deg, #00e0ff 5%,#a2d9ff 70%)",
    marginBottom: 10,
  },
  title: { flex: 1, marginLeft: 60, color: "white" },
  buttonStyles: {
    color: "black",
    margin: "0 6px 0",
    display: "inline-block",
  },
  buttons: {
    marginRight: 60,
  },
  ["@media (max-width:480)"]: {
    marginRight: 40,
    
  },
  name: {
    fontStyle: "bold",
    fontSize: 32,
  },
  ["@media (max-width:480)"]: {
    fontSize: 25,
    
  },
  head_wave: {
    marginTop: 0,
    textAlign: "center",
    zIndex: -50,
    width:"100%",
    height:"100%",
  },
  logo:{
    height:"60px",
    width:"200px",
    ["@media (max-width:600px)"]: {
      height:"40px",
     width:"120px",
      
    },
    ["@media (max-width:480)"]: {
      height:"30px",
     width:"100px",
      
    },
  } 

}));

export default function AppBarPrimary() {
   

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    account: { role },
    authenticated,
    firstName,
    lastName,
    address,
  } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutAction(history));
  };

  return (
    <>
    
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/" className={classes.title}>
          <img src={Logo} alt='local'className={classes.logo} />
          {/* <Typography variant="h6" noWrap>
            <span className={classes.name}>Local</span>
          </Typography> */}
        </Link>
        {authenticated ? (
          role === "ROLE_SELLER" ? (
            <div className={classes.buttons}>
              <Typography className={classes.buttonStyles}>
                Seller Dashboard
              </Typography>
              <Link to="/seller/orders">
                <Button className={classes.buttonStyles}>Orders</Button>
              </Link>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
                variant="outlined"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.buttons}>
              <Typography className={classes.buttonStyles}>
                Hello, {firstName} {lastName}
              </Typography>
              <Link to="/orders">
                <Button className={classes.buttonStyles}>Orders</Button>
              </Link>
              <Link to={{ pathname: "/cart", state: { address: address } }}>
                <Button className={classes.buttonStyles}>Cart</Button>
              </Link>
              <Button
                onClick={handleLogout}
                className={classes.buttonStyles}
                variant="outlined"
              >
                Logout
              </Button>
            </div>
          )
        ) : (
          <div className={classes.buttons}>
            <Link to="/login">
              <Button className={classes.buttonStyles}>Login</Button>
            </Link>
            <Link to="/register">
              <Button className={classes.buttonStyles} variant="outlined">
                Register
              </Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <Head_wave2 className={classes.head_wave} />
  </>
  );
}
