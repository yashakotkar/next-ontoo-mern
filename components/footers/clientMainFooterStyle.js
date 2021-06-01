import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "black",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      transition: "0.3s ease-in-out",
      "&:hover": {
        textDecoration: "underline",
        color: theme.palette.primary.light,
      },
    },
  },
  container: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 0,
    },
  },
  logoContainer: {
    width: "100%",
    position: "relative",
    "& p": {
      //   color: grayColor[1],
      margin: "0",
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      "& p": {
        textAlign: "center",
      },
    },
  },
  logoImgContainer: {
    width: "12rem",
    height: "2.5rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "10rem",
      height: "2rem",
      position: "relative",
    },
  },
  detailBlock: {
    paddingTop: "1rem",

    "&:last": {
      textAlign: "right",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      "& a": {
        textDecoration: "underline",
      },
      "& .MuiGrid-container": {},
    },
  },
  smCenterGrid: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  right: {
    textAlign: "right",
    "& p": {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      "& p": {
        justifyContent: "center",
      },
    },
  },
  socialMediaBand: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    // "& a": {
    //   color: "inherit",
    // },
    "& .MuiSvgIcon-root": {
      border: "2px solid white",
      borderRadius: "100%",
      padding: "0.5rem",
      "&:hover": {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiSvgIcon-root": {
        // color: primaryColor[3],
        // borderColor: primaryColor[3],
        fontSize: "0.9rem",
      },
      marginTop: "1rem",
    },
  },
  copyrightBand: {
    // color: grayColor[6],
    textAlign: "center",
    padding: "0.4rem",
    fontSize: "0.65rem",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      //   borderTop: `1px solid ${grayColor[8]}`,
    },
  },
}));

export default styles;
