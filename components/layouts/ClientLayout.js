import { makeStyles, Paper } from "@material-ui/core";
import ClientMainFooter from "../footers/ClientMainFooter";
import LocationBar from "../location/locationBar";
import ClientMainNavbar from "../navbars/ClientMainNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
  },
}));

export default function ClientLayout({ children }) {
  const classes = useStyles();

  return (
    <Paper elevate="0" square className={classes.root}>
      <LocationBar />
      {children}
      <ClientMainFooter />
    </Paper>
  );
}
