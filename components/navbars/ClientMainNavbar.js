import {
  AppBar,
  Button,
  createMuiTheme,
  fade,
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

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "rgba( 0,0,0,0.5)",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    // color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    "& .MuiInputBase-root": {
      // color: theme.palette.common.white,
      padding: "0 0.5rem",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ClientMainNavbar({ backgroundColor }) {
  const theme = useTheme();
  const classes = useStyles();

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: backgroundColor || theme.palette.primary.main,
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" className={classes.root} top="0">
        <Toolbar variant="dense">
          <Link href="/">
            <div>
              <Image src="/onntooLogoWhite.png" width={200} height={45} />
            </div>
          </Link>
          <div className={classes.grow} />
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
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
