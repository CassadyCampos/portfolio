import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import WorkIcon from "@material-ui/icons/Work";
import Favorite from "@material-ui/icons/Favorite";
import WebIcon from '@material-ui/icons/Web';
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/cassady.jpg";

// Sections for this page
import ContactSection from "./Sections/ContactSection.js";

// Images for this page
import studio1 from "../../assets/img/examples/studio-1.jpg";
import projects1 from "../../assets/img/examples/stylesheet-organizer.jpg";
import projects2 from "../../assets/img/examples/track-magnet.jpg";
import projects3 from "../../assets/img/examples/des-algo.jpg";
import jurney from "../../assets/img/examples/jurney.jpg";
import posts1 from "../../assets/img/examples/tech-playground.jpg";
import posts2 from "../../assets/img/examples/shining-student.jpg"
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import styles from "../../assets/jss/material-kit-react/views/profilePage";
// import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
// import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Cassady Campos"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Cassady N. Campos</h3>
                    <p className={classes.title}>Experienced software developer with a passion for technology.</p>
                    <Button justIcon link className={classes.margin5}
                      href="https://twitter.com/CassCA" target="_blank">
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}
                      href="https://github.com/CassadyCampos" target="_blank">
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}
                      href="https://www.linkedin.com/in/cassady-campos-2915531a9/" target="_blank">
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.description}>
                Technology.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: WorkIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={projects1}
                                className={navImageClasses}
                                />
                            <img
                              alt="..."
                              src={projects3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={projects2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={jurney}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Posts",
                      tabIcon: WebIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <a href="https://www.arcurve.com/blog/1187-intern-class?fbclid=IwAR0evCb1rVef9YeTkFvXPiABfkvR1Gti-iYHMBX7Lw1NJHy2ZAw7_bDRsBM"
                               target="_blank" rel="noopener noreferrer">
                              <img
                                alt="..."
                                src={posts1}
                                className={navImageClasses}
                                />
                            </a>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={8} sm={8} md={6}>
                            <a href="https://www.uleth.ca/artsci/math-computer-science/cassady-campos-computer-science-co-op"
                              target="_blank" rel="noopener noreferrer">
                              <img
                                alt="..."
                                src={posts2}
                                className={navImageClasses}
                                />
                            </a>
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
            <ContactSection/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
