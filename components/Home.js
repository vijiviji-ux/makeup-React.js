import React from "react";
import "./Home.css";
import likemakeup from'../images/likemakeup.webp'; 
import lorelparis from '../images/lorelparis.webp';
import  whitining from'../images/whitining.webp';
import lip from '../images/lip.avif';
import cetapi from'../images/cetapi.avif';
import donkey from '../images/donkey.avif';
import mac from '../images/mac.avif';
import ponds from'../images/ponds.avif';
import swis from'../images/swis.avif';
import nykaa from'../images/nykaa.avif';
import urband from'../images/urband.avif';
import tonymaly from'../images/tonymaly.avif';
import sugar from'../images/sugar.avif';
import foxtale from'../images/foxtale.avif';
import cerave from'../images/cerave.avif';
import olay from'../images/olay.avif';
import colorbar from'../images/colorbar.avif';
import slider from'../images/slider.avif';




function Home() {
    return (
        <div className="home">
            <h1></h1>
            <div className="carousel">
                <div className="carousel-container">
                    <div className="carousel-slide">
                        <img
                            src= {likemakeup}
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-slide">
                        <img
                            src={lorelparis}
                            alt="Slide 2"
                        />
                    </div>
                    <div className="carousel-slide">
                        <img
                            src={whitining}
                            alt="Slide 3"
                        />
                    </div>
                </div>
                <button className="prev" onClick={() => slideCarousel("prev")}>
                    &#10094;
                </button>
                <button className="next" onClick={() => slideCarousel("next")}>
                    &#10095;
                </button>
            </div>
          
          <div className="header">
            <h1>Our Offer Products</h1>

          </div>

          <div className="order">
            <h1>Offers</h1>
            <div className="card-container">
                <div className="card">
                    <img src={lip} alt="Kay Beauty" />
                    <h2>Kay Beauty</h2>
                    <p className="offer">Up To 30% Off</p>
                    <p className="description">Free Gift On ₹1199+</p>
                </div>
                <div className="card">
                    <img src={cetapi} alt="Love Beauty and Planet" />
                    <h2>Cetaphil</h2>
                    <p className="offer">Up To 40% Off</p>
                    <p className="description">Extra 10% Off On ₹699*</p>
                </div>
                <div className="card">
                    <img src={donkey} alt="Cetaphil" />
                    <h2>Don&Key</h2>
                    <p className="offer">Min. 20% Off</p>
                    <p className="description">Get 2 Minis On ₹999+</p>
                </div>
                <div className="card">
                    <img src={mac} alt="Kérastase Paris" />
                    <h2>Kérastase Paris</h2>
                    <p className="offer">Complimentary Gifts</p>
                    <p className="description">On Any 2 Products</p>
                </div>
                <div className="card">
                    <img src={ponds} alt="Swiss Beauty" />
                    <h2>Swiss Beauty</h2>
                    <p className="offer">Min. 25% Off</p>
                    <p className="description">Free Gift On ₹399+</p>
                </div>
                <div className="card">
                    <img src={swis} alt="Swiss Beauty" />
                    <h2>Swiss Beauty</h2>
                    <p className="offer">Min. 25% Off</p>
                    <p className="description">Free Gift On ₹328+</p>
                </div>
                </div>
                </div>

                <div className="header">
            <h1>Best Brand Products</h1>

          </div>


          <div className="image-gallery">
  <div className="image-card">
    <img src={nykaa} alt="image-1" className="image" />
    <div className="card-content">
      <p className="offer">NYKAA</p>
      <p className="description">UP TO 50% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={urband} alt="image-2" className="image" />
    <div className="card-content">
      <p className="offer">URBANDECAY</p>
      <p className="description">UP TO 40% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={tonymaly} alt="image-3" className="image" />
    <div className="card-content">
      <p className="offer">TONYMALY</p>
      <p className="description">FLAT 60% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={sugar} alt="image-4" className="image" />
    <div className="card-content">
      <p className="offer">SUGAR</p>
      <p className="description">UP TO 40% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={foxtale} alt="image-5" className="image" />
    <div className="card-content">
      <p className="offer">FOXTALE</p>
      <p className="description">Get 2 Minis On ₹99</p>
    </div>
  </div>
  <div className="image-card">
    <img src={cerave} alt="image-6" className="image" />
    <div className="card-content">
      <p className="offer">CERAVE</p>
      <p className="description">FLAT 20% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={olay} alt="image-7" className="image" />
    <div className="card-content">
      <p className="offer">OLAY</p>
      <p className="description">UP TO 40% OFF</p>
    </div>
  </div>
  <div className="image-card">
    <img src={colorbar} alt="image-8" className="image" />
    <div className="card-content">
      <p className="offer">COLORBAR</p>
      <p className="description">UP TO 40% OFF</p>
    </div>
  </div>
</div>

    <div className="sliders">
            <img src={slider} alt="imges"/>

          </div>


          <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>     
            


          




        
        



        </div>
    );
}

function slideCarousel(direction) {
    const container = document.querySelector(".carousel-container");
    const slideWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;

    if (direction === "prev") {
        container.scrollTo({
            left: currentScroll - slideWidth,
            behavior: "smooth",
        });
    } else if (direction === "next") {
        container.scrollTo({
            left: currentScroll + slideWidth,
            behavior: "smooth",
        });
    }
}

export default Home;
