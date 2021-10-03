import React from "react";


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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0." d="M0,320L34.3,314.7C68.6,309,137,299,206,250.7C274.3,203,343,117,411,85.3C480,53,549,75,617,106.7C685.7,139,754,181,823,170.7C891.4,160,960,96,1029,80C1097.1,64,1166,96,1234,112C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
   
   </div>
   </>
  );
}
