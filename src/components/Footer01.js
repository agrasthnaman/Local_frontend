// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
// //material-ui
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({  
//     FooterContainer:{
//         backgroundColor: "#101522",
//     },


//     FooterWrap:{
//         padding: "48px 24px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         maxWidth: "1100px",
//         margin:" 0 auto", 
//     },


//     FooterLinkContainer :{
//         display: "flex",
//         justifyContent: "center",

//     ["@media (max-width: 820px)"]:{
//         paddingTop: "32px",
//     }
// },

//     FooterLinkeWrapper:{
//         display: "flex",

//     ["@media(max-width: 820px)"]:{
//         flexDirection: "column",
//     }
//     },
    

//     FooterLinkItem :{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         margin: "16px",
//         textalign: "left",
//         boxsizing: "border-box",
//         color: "#fff",

//         ["@media (max-width: 420px)"]:{
//             margin: 0,
//             padding: "10px",
//             width: "100%",
//         },
//     },


//     FooterLinkTitle:{
//         font-size: "14px";
//         margin-bottom: "16px";
//     }

// export const FooterLink = styled(Link)`
//     color: #fff;
//     text-decoration: none;
//     margin-bottom: 0.5rem;
//     font-size: 14px;

//     &:hover{
//         color: #01bf71;
//         transition: 0.3s ease-out;

//     }
// `

// export const SocialMedia = styled.section`
//     max-width: 1000px;
//     width: 100%
// `

// export const SocialMediaWrap = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     max-width: 1100px;
//     margin: 40px auto 0 auto;

//     @media screen and (max-width: 820px){
//         flex-direction: column;
//     }
// `

// export const SocialLogo = styled(Link)`
//     color: #fff;
//     justify-self: start;
//     cursor: pointer;
//     text-decoration: none;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     margin-bottom: 16px;
//     font-weight: bold; 
// `
// export const WebsiteRights = styled.small`
//     color: #fff;
//     margin-bottom: 16px;
// `

// export const SocialIcon = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 240px;
// `

// export const SocialIconLink = styled.a`
//     color: #fff;
//     font-size: 24px;
// `;
// export default function Footer() {
//     const { authenticated } = useSelector((state) => state.auth);
//     const classes = useStyles();
//     return (
//       <>
//         <footer className={classes.FooterContainer}>
//             <div className={classes.FooterWrap}>
//                 <div className={classes.FooterLinkContainer}>
//                     <div className={classes.FooterLinkeWrapper}>
//                         <div className={classes.FooterLinkItem}>
//                             <h1 className={classes.FooterLinkTitle}>About Us</h1>
//                             <Link className={classes.FooterLink} to='signin'>How it works</Link>
//                             <Link className={classes.FooterLink} to='signin'>Careers</Link>
//                             <Link className={classes.FooterLink} to='signin'>Terms and Services</Link>
//                             <Link className={classes.FooterLink} to='signin'>Contact Us</Link>
//                         </div>
//                         <div className={classes.FooterLinkItem}>
//                             <h1 className={classes.FooterLink}>About Us</h1>
//                             <Link className={classes.FooterLink} to='signin'>How it works</Link>
//                             <Link className={classes.FooterLink} to='signin'>Careers</Link>
//                             <Link className={classes.FooterLink} to='signin'>Terms and Services</Link>
//                             <Link className={classes.FooterLink} to='signin'>Contact Us</Link>
//                         </div>
//                     </div>


//                     <div className={classes.FooterLinkeWrapper}>
//                         <div className={classes.FooterLinkItem}>
//                             <h1 className={classes.FooterLink}>About Us</h1>
//                             <Link className={classes.FooterLink} to='signin'>How it works</Link>
//                             <Link className={classes.FooterLink} to='signin'>Careers</Link>
//                             <Link className={classes.FooterLink} to='signin'>Terms and Services</Link>
//                             <Link className={classes.FooterLink} to='signin'>Contact Us</Link>
//                         </div>
//                         <div className={classes.FooterLinkItem}>
//                             <h1 className={classes.FooterLink}>About Us</h1>
//                             <Link className={classes.FooterLink} to='signin'>How it works</Link>
//                             <Link className={classes.FooterLink} to='signin'>Careers</Link>
//                             <Link className={classes.FooterLink} to='signin'>Terms and Services</Link>
//                             <Link className={classes.FooterLink} to='signin'>Contact Us</Link>
//                         </div>
//                     </div>

//                 </div>
//                 <section className={classes.SocialMedia}>
//                     <div className={classes.SocialMediaWrap}>
//                         <Link className={classes.SocialLogo} to='/' onClick={toggleHome}>
//                             dollo
//                         </Link>
//                         <small className={classes.WebsiteRights}>dollo © {new Date().getFullYear()}
//                             All rights reserved.
//                         </small>
//                         <div className={classes.SocialIcon}>
//                             <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Facebook">
//                                 <FaFacebook />
//                             </a>
//                             <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Instagram">
//                                 <FaInstagram />
//                             </a>
//                             <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Twitter">
//                                 <FaTwitter />
//                             </a >
//                             <a className={classes.SocialIconLink} href='/' target='_blank' aria-label="Linkedin">
//                                 <FaLinkedin />
//                             </a>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </footer>
//         </>
//     )
// }

// export default Footer
