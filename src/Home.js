import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import SimpleImageSlider from "react-simple-image-slider";
import "../src/css/main.css";
import "../src/css/nav.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Home = () => {

const photos = [
  { name: 'photo 1',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-32-59_1616189610.jpg?width=2000" },
  { name: 'photo 2',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210108_012738288.MP_1616189224.jpg?width=2000" },
  { name: 'photo 3',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-35-09_1616189742.jpg?width=2000" },
  { name: 'photo 4',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/IMG_20210313_175206460_1616189161.jpg?width=2000" },
  { name: 'photo 5',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_234441242_1616189228.jpg?width=2000" },
  { name: 'photo 6',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210110_181815826_1616189220.jpg?width=2000" },
  { name: 'photo 7',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_230257642.MP_1616189217.jpg?width=2000" },
  { name: 'photo 8',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_175309581_1616189170.jpg?width=2000" },
  { name: 'photo 9',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/FB_IMG_1611160416360_1616189137.jpg?width=2000" },
  { name: 'photo 10',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210102_225432077.MP_1616189215.jpg?width=2000" },
  { name: 'photo 11',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/received_251609366525312_1616189143.jpeg?width=2000" },
  { name: 'photo 12',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/2021-03-19_17-39-59_1616190026.jpg?width=2000" },
  { name: 'photo 13',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/PXL_20210131_225238925_1616016391.jpg?width=2000" },
  { name: 'photo 14',
    url: "https://www.theretrozonearcade.com/uploads/b/de71f1d13baa43ee6fde38ca756164d2ed27eaf0cf7c37ece92cb3a76b98a972/IMG_20210228_190103090_1616189161.jpg?width=2000" },
];


const settings = {
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  infinite: true,
  speed: 500,
  slidesToShow: 14,
  arrows: true,
  slidesToScroll: 1,
  className: "slides"
};
    return (
      <>
        <body>
        
           <Nav/>

            <section className="kv-container">
            <h1>Retro Games <b>-</b> Pinball</h1>
            <h1>Classic Console Games</h1>
            <h1>Beer <b>-</b> Wine <b>-</b> Nostalgia</h1>
            </section>

            <section className="kv-slider">
        
                <Slider {...settings}>
                  {photos.map((photo) => {
                    return(
                      <div>
                        <img width="100%"  src={photo.url}/>
                      </div>
                      )
                  })}
                </Slider>
            </section>
            

           <section className="bottom-info">
      
                <div className="bottom-info-box">
                    <h3>LOCATION & HOURS</h3>
                </div>
                <div className="bottom-info-box">
                    <span>3577 Fowler Street</span>
                    <span>Fort Myers. FL 339O1. US</span>
                    <span>239-266-4605</span>
                    <span>retrozonefortmyers@gmail.com</span>
                    <a href="https://www.google.com/maps/dir/38.2888051,140.8830369/3577+Fowler+St,+Fort+Myers,+FL+33901,+USA/@1.9745919,122.6192387,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88db6a7e01624bc1:0x5ee4df6274ddf468!2m2!1d-81.8610022!2d26.6111705" target="_blank">
                        <p>Get Directions</p>
                    </a>
                </div>
                <div className="bottom-info-box">
                    <span>Monday Closed</span>
                    <span>Tuesday Closed</span>
                    <span>Wednesday 12:00pm - 9:00pm</span>
                    <span>Thursday 12:00pm - 9:00pm</span>
                    <span>Friday 12:00pm - 10:00pm</span>
                    <span>Saturday 12:00pm - 10:00pm</span>
                    <span>Sunday 12:00pm - 5:00pm</span>
                </div>
            </section>
          <Footer/>  
        
        </body>
        </>
    )
}

export default Home
