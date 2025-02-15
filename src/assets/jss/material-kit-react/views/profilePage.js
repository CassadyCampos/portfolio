// import { container, title } from "assets/jss/material-kit-react.js";
import { container, title } from "../../material-kit-react";

import imagesStyle from "../imagesStyles";
// import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
    fontFamily: `"Roboto","Helvetica","Arial",sans-serif`
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    // ...title,
    // display: "inline-block",
    // position: "relative",
    // marginTop: "30px",
    // minHeight: "32px",
    // textDecoration: "none"
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    display: 'block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1.5625rem',
    lineHeight: '1.4em'
  },
  subTitle: {
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    display: 'block',
    position: 'relative',
    marginTop: '20px',
    minHeight: '32px',
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1rem',
    lineHeight: '1.4em'
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePageStyle;
