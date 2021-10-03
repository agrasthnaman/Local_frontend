import React from "react";


//material-ui
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    head_wave: {
    //marginTop: 0,
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
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,160L34.3,170.7C68.6,181,137,203,206,202.7C274.3,203,343,181,411,186.7C480,192,549,224,617,245.3C685.7,267,754,277,823,234.7C891.4,192,960,96,1029,101.3C1097.1,107,1166,213,1234,240C1302.9,267,1371,213,1406,186.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
   
   </div>
   </>
  );
}
