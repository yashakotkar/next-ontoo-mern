import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import _ from "lodash";
import { Rating } from "@material-ui/lab";

// Custom Imports
import connectDB from "../../utils/connectDB";
import sequelize from "../../models/index";
import ClientLayout from "../../components/layouts/ClientLayout";
import ClientMainNavbar from "../../components/navbars/ClientMainNavbar";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "5rem",
    paddingTop: "6.5rem",
  },
  breadcrumbs: {
    marginBottom: "1rem",
  },
  productRoot: {
    position: "relative",
    // "& img": {
    //   borderRadius: "10px",
    // },
  },
  imagesContainer: {
    position: "sticky",
    top: "6.5rem",
  },
  imageListContainer: {
    "& img": {
      borderRadius: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "nowrap",
      whiteSpace: "nowrap",
      overflowY: "hidden",
      overflowX: "auto",
      "& .MuiGrid-item": {
        flexShrink: 0,
      },
    },
  },
  rating: {
    color: theme.palette.primary.main,
    marginBottom: 0,
  },
  mrp: {
    textDecoration: "line-through",
  },
  form: {
    margin: "1rem 0",
  },
}));

export default function Product(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const initialState = {
    sku: props.sku,
    qty: props.qtyInput ? 1 : undefined,
    msg: props.msgInput ? "1" : undefined,
    weight: props.weightInput ? props.weightList[0] : undefined,
  };

  const [state, setstate] = useState(initialState);

  const [currentImage, setCurrentImage] = useState(0);

  const handleSubmit = (params) => {};

  return (
    <ClientLayout>
      <ClientMainNavbar />
      <Box className={classes.root}>
        <Container>
          <Grid
            container
            justify="center"
            spacing={matches ? 1 : 2}
            className={classes.productRoot}>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <Breadcrumbs
                aria-label="breadcrumb"
                className={classes.breadcrumbs}>
                <Typography varainat="overline" component="h4">
                  <Link href="/">home</Link>
                </Typography>

                <Typography varainat="overline" component="h4">
                  <Link gutterBottom href={`/${props.CategoryName}`}>
                    {props.CategoryName}
                  </Link>
                </Typography>
                <Typography varainat="overline" component="h4">
                  {props.name}
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid
                container
                justify="space-around"
                direction={matches ? "row" : "column"}
                spacing={matches ? 0 : 2}
                className={classes.imagesContainer}>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                  <Grid
                    container
                    spacing={matches ? 0 : 1}
                    direction={matches ? "column" : "row"}
                    className={classes.imageListContainer}>
                    {props.img.map((img, imgIndex) => (
                      <Grid
                        item
                        key={img}
                        onClick={(e) => setCurrentImage(imgIndex)}>
                        <Image src={img} width="150" height="150" />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item md={9} lg={9}>
                  <Image
                    src={props.img[currentImage]}
                    width="720"
                    height="720"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="h5" component="h1">
                    {_.startCase(props.name)}
                  </Typography>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item>
                      <Typography variant="body2">
                        {_.round(props.rating, 2)}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Rating
                        name="Rating"
                        className={classes.rating}
                        defaultValue={props.rating}
                        getLabelText={(value) =>
                          `${value} Heart${value !== 1 ? "s" : ""}`
                        }
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        readOnly
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Typography
                        gutterBottom
                        variant="h3"
                        color="primary"
                        component="h3">
                        ₹{_.round(props.price, 2)}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        compoenent="h5"
                        className={classes.mrp}>
                        ₹{_.round(props.mrp, 2)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" />
                  <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={1}>
                      {props.qtyInput && (
                        <Grid item>
                          <TextField
                            label="Quantity"
                            variant={"outlined"}
                            fullWidth={true}
                            size="small"
                            required={true}
                            // disabled={
                            //   cartAdd.loading ||
                            //   productFetch.loading ||
                            //   productFetch.error
                            // }
                            inputProps={{
                              type: "number",
                              min: 0,
                              max: props.qtyMax,
                            }}
                            value={state.qty}
                            onChange={(e) =>
                              setstate({
                                ...state,
                                qty: e.target.value,
                              })
                            }
                          />
                        </Grid>
                      )}
                      {props.weightInput && (
                        <Grid item xs={6} sm={6} md={6}>
                          <FormControl
                            variant={"outlined"}
                            required={true}
                            size="small"
                            fullWidth={true}>
                            <InputLabel>Weight</InputLabel>
                            <Select
                              label="Weight"
                              // disabled={
                              //   cartAdd.loading ||
                              //   productFetch.loading ||
                              //   productFetch.error
                              // }
                              value={state.weight}
                              onChange={(e, newValue) =>
                                setstate({
                                  ...state,
                                  weight: +e.target.value,
                                })
                              }>
                              {props.weightList.map((w) => (
                                <MenuItem value={w}>{w}kg</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      )}
                      {props.msgInput && (
                        <Grid item xs={12} sm={12} md={12}>
                          <TextField
                            label={"Message"}
                            fullWidth={true}
                            size="small"
                            variant={"outlined"}
                            // required={true}
                            placeholder={"Write a message on Cake"}
                            inputProps={{
                              maxLength: props.msgLength,
                            }}
                            value={state.msg}
                            onChange={(e) =>
                              setState({
                                ...state,
                                msg: e.currentTarget.value,
                              })
                            }
                            // disabled={cartAdd.loading || productFetch.loading}
                            // helperText={`Message Length - ${props.msgLength}`}
                          />
                        </Grid>
                      )}
                      {props.imgInput && (
                        // TODO: Image Input Prop
                        <Fragment>Image Input Prop</Fragment>
                      )}
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextField
                          label="City"
                          fullWidth={true}
                          size="small"
                          variant={"outlined"}
                          value={state.location}
                          onChange={(e) =>
                            setState({ ...state, location: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Button
                          variant={"contained"}
                          color={"primary"}
                          // className={classes.button}
                          fullWidth={true}
                          type={"submit"}
                          // disabled={
                          //   cartAdd.loading ||
                          //   productFetch.loading ||
                          //   productFetch.error
                          // }
                        >
                          Add To Cart
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Divider variant="fullWidth" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ClientLayout>
  );
}

export async function getServerSideProps({ params }) {
  await connectDB();

  return await sequelize.models.Product.findByPk(params.sku)
    .then((data) => {
      console.log(data);
      if (data) {
        return { props: JSON.parse(JSON.stringify(data.dataValues)) };
      } else {
        return { notFound: true };
      }
    })
    .catch((err) => {
      return { notFound: true };
    });
}
