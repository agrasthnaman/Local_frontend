import React from "react";
import head_wave from "../../images/svg/head_wave.svg";

//material-ui
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    head_wave: {
    marginTop: 0,
    width: '100%',
    textAlign: "center",
    zIndex: -100
  }    
}));

export default function Footer() {
  const classes = useStyles();
  return (
   <>
   <div className={classes.head_wave}>
   <img className={classes.head_wave}src={head_wave} alt="" />
   
   </div>
   </>
  );
}
