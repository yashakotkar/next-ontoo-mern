import { CardMedia } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import ClientLayout from "../components/layouts/ClientLayout";
// import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeBlock from "../components/home/HomeBlock";
import ClientMainNavbar from "../components/navbars/ClientMainNavbar";

export default function Home(props) {
  const { featureSetting, homeBlocks } = props;
  console.log(props);
  return (
    <div>
      <Head>
        <title>OnnToo</title>
        <meta
          name="description"
          content="Cakes, Flowers, Gifts and much more"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aladin&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ClientMainNavbar />
      <ClientLayout>
        {featureSetting.homeImages.length > 0 && (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                // slidesToSlide: 3, // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
                // slidesToSlide: 2, // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              },
            }}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {featureSetting.homeImages.map((img, carouselKey) => (
              <CardMedia
                key={carouselKey}
                image={img}
                style={{
                  height: 0,
                  width: "100%",
                  paddingTop: "30%",
                }}
              />
            ))}

            {/* <CardMedia
                image="/images/carousels/1.jpeg"
                style={{
                  height: 0,
                  width: "100%",
                  paddingTop: "30%",
                }}
              />
              <CardMedia
                image="/images/carousels/2.jpeg"
                style={{
                  height: 0,
                  width: "100%",
                  paddingTop: "30%",
                }}
              /> */}
          </Carousel>
        )}
        {homeBlocks.length > 0 &&
          homeBlocks.map(
            (homeBlock, homeBlockKey) =>
              Boolean(homeBlock.MenuId) &&
              (Boolean(homeBlock.Menu.id) ? (
                <HomeBlock
                  key={`home_block-${homeBlockKey}`}
                  deviceType={props.deviceType}
                  title={homeBlock.Menu.name}
                  link={`/${homeBlock.Menu.CategoryName}/${homeBlock.Menu.type}/${homeBlock.Menu.name}/`}
                  elements={
                    homeBlock.Menu.Products &&
                    homeBlock.Menu.Products.map((p) => {
                      return {
                        name: p.name,
                        img: p.img.length > 0 ? p.img[0] : "",
                        link: `/product/${p.sku}`,
                      };
                    })
                  }
                />
              ) : (
                Boolean(homeBlock.CategoryName) &&
                Boolean(homeBlock.Category.name) && (
                  <HomeBlock
                    key={`home_block-${homeBlockKey}`}
                    deviceType={props.deviceType}
                    title={homeBlock.CategoryName}
                    link={`/${homeBlock.CategoryName}`}
                    elements={
                      homeBlock.Category.Products &&
                      homeBlock.Category.Products.map((p) => {
                        return {
                          name: p.name,
                          img: p.img.length > 0 ? p.img[0] : "",
                          link: `/product/${p.sku}`,
                        };
                      })
                    }
                  />
                )
              ))
          )}
      </ClientLayout>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/api/client/feature-setting`);
  const data = await res.json();
  console.log("Result", data.homeBlocks);
  console.log("Result", data.featureSetting);
  return { props: data };
}
