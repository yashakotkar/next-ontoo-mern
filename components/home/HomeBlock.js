import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "./homeBlockStyle";
import Carousel from "react-multi-carousel";
import _ from "lodash";

export default function HomeBlock({ title, link, elements, deviceType }) {
  const classes = useStyles();

  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return elements.length > 0 ? (
    <Paper className={classes.root} square>
      <div className={classes.titleDiv}>
        <Typography
          className={classes.titleHeading}
          align="center"
          color="primary"
          variant="h4"
          component="h4">
          {_.startCase(title)}
        </Typography>
        <hr align="center" />
      </div>
      {/* <h1>{_.startCase(title)}</h1> */}
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={
        //   deviceType === "mobile" || deviceType === "tablet" ? false : true
        // }
        responsive={carouselResponsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {elements.length > 0 &&
          elements.map((item, homeBlockElementKey) => (
            <div
              key={`home_block-element-${homeBlockElementKey}`}
              className={classes.imageContainer}>
              <Link href={item.link}>
                <div>
                  <Image src={item.img} width={300} height={300} />
                  <Typography
                    className={classes.nameTag}
                    align="center"
                    // color="white"
                    variant="subtitle2"
                    component="p">
                    {_.startCase(item.name)}
                  </Typography>
                </div>
              </Link>
            </div>
          ))}
      </Carousel>
    </Paper>
  ) : (
    <div></div>
  );
}
