import {
  AppBar,
  Button,
  createMuiTheme,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  ThemeProvider,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";

// Styles
// import styles from "./navbar.module.css";
// Icons
import { Menu as MenuIcon, Search as SearchIcon } from "@material-ui/icons";
import CartIcon from "@material-ui/icons/ShoppingCart";
import AdminIcon from "@material-ui/icons/SupervisorAccount";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "./navbarMuiStyles";

export default function ClientMainNavbar() {
  const theme = useTheme();
  const classes = useStyles();

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "rgba(0, 0, 0, 0.5)",
      },
    },
  });

  return (
    <AppBar position="fixed" className={classes.root} top="0">
      <Toolbar variant="dense">
        <Link href="/">
          <div>
            <Image src="/onntooLogoWhite.png" width={200} height={45} />
          </div>
        </Link>
        <div className={classes.grow} />
        <ThemeProvider theme={darkTheme}>
          <TextField
            size="small"
            className={classes.search}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button startIcon={<LocationOnIcon />}>Location</Button>
          <Button startIcon={<AdminIcon />}>Admin</Button>
          <Button startIcon={<CartIcon />}>Cart</Button>
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
}
