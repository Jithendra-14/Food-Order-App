import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Box } from "@material-ui/core";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#8a2b06",
    height: "5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    padding: "0 5%",
    color: "#ffffff",
    zIndex: 10,
  },
  toolBar: {
    margin: "auto 0px",
  },
  title: {
    flexGrow: 1,
  },
  mainImage: {
    width: "100%",
    height: "25rem",
    zIndex: 0,
    overflow: "hidden",
  },
  img: {
    width: "110%",
    height: "100%",
    objectFit: "cover",
    transform: "rotateZ(-5deg) translateY(-4rem) translateX(-1rem)",
  },
}));

const Header = (props) => {
  const classes = styles();
  return (
    <Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h4" component="h1" className={classes.title}>
            ReactMeals
          </Typography>
          <HeaderCartButton onClick={props.onShowCart} />
        </Toolbar>
      </AppBar>
      <Box className={classes.mainImage}>
        <img className={classes.img} src={mealsImage} alt="A table full of delicious food!" />
      </Box>
    </Fragment>
  );
};

export default Header;
