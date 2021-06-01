import {
  Container,
  createMuiTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

// Styles
import useStyles from "./clientMainFooterStyle";
// LOGOS
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff5f5d",
    },
  },
});

function ClientMainFooter() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper square className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item className={classes.logoContainer} xs={12} md={12}>
              <div className={classes.logoImgContainer}>
                <Image src="/onntooLogoWhite.png" layout="fill" />
              </div>
              <Typography variant="subtitle2" component="p">
                For every Occassion.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container>
                <Grid item xs={12} md={12} className={classes.detailBlock}>
                  <Typography variant="h6" gutterBottom component="h6">
                    <Link href={"/aboutus"}>About US</Link>
                  </Typography>
                  <Typography variant="body2" gutterBottom component="p">
                    We want to make your occassions special and memorable.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} className={classes.detailBlock}>
                  <Typography variant="h6" gutterBottom component="h6">
                    <Link href="Contact">Contact</Link>
                  </Typography>
                  <Typography variant="body2" gutterBottom component="p">
                    Phone Number :{" "}
                    <span>
                      <a href={`tel:+917000347183`}>
                        +91{process.env.MY_PHONE_NUMBER}
                      </a>
                    </span>
                  </Typography>
                  <Typography variant="body2" gutterBottom component="p">
                    Email :{" "}
                    <span>
                      <a href={`mailto:${process.env.MY_EMAIL}`}>
                        {process.env.MY_EMAIL}
                      </a>
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                container
                className={classes.socialMediaBand}
                justify={"space-around"}>
                <Link href={"https://instagram.com"}>
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link href={"/"}>
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link href={"/"}>
                  <TwitterIcon fontSize="large" />
                </Link>
              </Grid>
            </Grid>
            <Grid
              item
              className={classNames(classes.detailBlock, classes.right)}
              xs={12}
              md={4}>
              <Typography variant="h6" gutterBottom component="h6">
                Links
              </Typography>
              <Typography variant="body2" gutterBottom component="p">
                <Link href={"/aboutus"}>About Us</Link>
              </Typography>
              <Typography variant="body2" gutterBottom component="p">
                <Link href={"/contactus"}>Contact Us</Link>
              </Typography>
              <Typography variant="body2" gutterBottom component="p">
                <Link href={"/privacy-policy"}>Pricvacy Policy</Link>
              </Typography>
              <Typography variant="body2" gutterBottom component="p">
                <Link href={"/terms-and-condition"}>Terms and Condition</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.copyrightBand}>
          Copyright © {new Date().getFullYear()} India Inc. All Rights Reserverd
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default ClientMainFooter;
