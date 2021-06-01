import { makeStyles } from "@material-ui/core";

const homeBlockStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  imageContainer: {
    margin: "0.5rem 0.5rem",
  },
  titleHeading: {
    fontFamily: "Aladin, cursive",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  titleDiv: {
    fontFamily: "Aladin, cursive",
    // letterSpacing: "2px",
    "& hr": {
      marginTop: 0,
      marginBottom: 0,
      // color: primaryColor[0],
      // backgroundColor: primaryColor[0],
      border: `1px solid ${theme.palette.primary.main}`,
      borderColor: theme.palette.primary.main,
      textAlign: "center",
      width: "80%",
      animation: "$separator-width 1s ease-out forwards",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0.5rem",
    },
  },
  "@keyframes separator-width": {
    "0%": {
      width: "50%",
    },
    "50%": {
      width: "0%",
    },
    "100%": {
      width: "25%",
    },
  },
  nameTag: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  },
}));

export default homeBlockStyle;
