import React from "react";
import ErrorImage from "../images/error404.svg";
// import ErrorImage2 from "../images/404-error-2.jpg";

const error404 = () => (
  <div style={{ textAlign: "center" }}>
    <p style={{ position: "absolute", top: "26%", left: "45%" }}>
      OOPS! PAGE NOT FOUND
    </p>
    <img
          src={ErrorImage}
          alt="login"
          height="500"
          width="500"
        />
    {/* <h1 style={{ fontSize: 180 }}>404</h1> */}
    {/* <p style={{ position: "absolute", top: "54%", left: "40%" }}>
      THE PAGE YOU REQUESTED FOR IS NOT FOUND
    </p> */}
    <p>THE PAGE YOU REQUESTED FOR IS NOT FOUND</p>
  </div>
);

export default error404;
