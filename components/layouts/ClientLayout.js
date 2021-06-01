import { makeStyles, Paper } from "@material-ui/core";
import ClientMainFooter from "../footers/ClientMainFooter";
import ClientMainNavbar from "../navbars/ClientMainNavbar";

// Styles
import useStyles from "./clientLayoutStyle";

export default function ClientLayout({ children }) {
  const classes = useStyles();

  return (
    <Paper elevate="0" square className={classes.root}>
      {children}
      <ClientMainFooter />
    </Paper>
  );
}
