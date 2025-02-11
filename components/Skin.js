import React from "react";
import'./Skin.css';
import skin from'../images/skin.gif';
import neutrogena from "../images/neutrogena.avif";
import loreal from "../images/loreal.avif";
import lakme from "../images/lakme.avif";
import caudalie from "../images/caudalie.avif";
import mamaearth from "../images/mamaearth.avif";
import bioderma from "../images/bioderma.avif";
import decons from "../images/decons.avif";
import kaya from "../images/kaya.avif";
import serum1 from "../images/serum1.avif";
import serum2 from "../images/serum2.avif";
import serum3 from "../images/serum3.avif";
import serum4 from "../images/serum4.avif";
import serum5 from "../images/serum5.avif";
import skinslider from"../images/skinslider.avif";
import winterglow from "../images/whitining.webp";
import night from "../images/night.avif";
import csms from "../images/csms.avif";
import derama from "../images/derma.avif";
import sunscreen from "../images/sunscreen.avif";

function Skin(){
    return(
        <div className="skin_slide">
            <img src={skin} alt="imhe"/>

            <div className="image-gallerys">
      <div className="image-cards">
        <img src={neutrogena} alt="Neutrogena" className="images" />
        <div className="card-content">
          <p className="card-title">Neutrogena</p>
          <p className="offer">Up To 40% Off</p>
          <p className="description">Free Bestsellers On ₹599+</p>
        </div>
      </div>

      <div className="image-cards">
        <img src={loreal} alt="L'Oréal Paris" className="images" />
        <div className="card-content">
          <p className="card-title">L'Oréal Paris</p>
          <p className="offer">Up To 40% Off</p>
          <p className="description">Free Product On ₹899+</p>
        </div>
      </div>

      <div className="image-cards">
        <img src={lakme} alt="Lakmé Skin" className="images" />
        <div className="card-content">
          <p className="card-title">Lakmé Skin</p>
          <p className="offer">Up To 50% Off</p>
          <p className="description">Extra 10% Off On ₹499+</p>
        </div>
      </div>

      <div className="image-cards">
        <img src={caudalie} alt="Caudalie" className="images" />
        <div className="card-content">
          <p className="card-title">Caudalie</p>
          <p className="offer">Up To 20% Off</p>
          <p className="description">On Bestsellers</p>
        </div>
      </div>

      <div className="image-cards">
        <img src={mamaearth} alt="Mamaearth" className="images" />
        <div className="card-content">
          <p className="card-title">Mamaearth</p>
          <p className="offer">Up To 30% Off</p>
          <p className="description">Free Aloe Face Wash On ₹449+</p>
        </div>
      </div>

      <div className="image-cards">
        <img src={bioderma} alt="Bioderma" className="images" />
        <div className="card-content">
          <p className="card-title">Bioderma</p>
          <p className="offer">Up To 20% Off</p>
          <p className="description">Free Full-Size On ₹1499+</p>
        </div>
      </div>


      <div className="image-cards">
        <img src={decons} alt="Bioderma" className="images" />
        <div className="card-content">
          <p className="card-title">Deconstuct</p>
          <p className="offer">Up To 50% Off</p>
          <p className="description">Free Full-Size On ₹2399+</p>
        </div>
      </div>
      <div className="image-cards">
        <img src={kaya} alt="Bioderma" className="images" />
        <div className="card-content">
          <p className="card-title">Kaya</p>
          <p className="offer">Up To 80% Off</p>
          <p className="description">Free Full-Size On ₹4499+</p>
        </div>
      </div>
    </div>

    <div className="carousel-containers">
      <h2 className="carousel-title">Skincare</h2>
      <div className="carousel-wrapper">
        <div className="carousel">
          <div className="cards">
            <img src={serum1} alt="Serum 1" className="product-image" />
            <div className="rating">4.3★/5 (446)</div>
            <p className="product-name">d'you Hustle Multi Active Serum</p>
            <p className="product-size">30ml</p>
            <p className="price">
              ₹2720 <span className="original-price">₹3200</span> <span className="discount">15% Off</span>
            </p>
          </div>
          <div className="cards">
            <img src={serum2} alt="Serum 2" className="product-image" />
            <div className="rating">4.5★/5 (189.3k)</div>
            <p className="product-name">Pond's Super Light Gel</p>
            <p className="product-size">2 pcs</p>
            <p className="price">
              ₹499 <span className="original-price">₹998</span> <span className="discount">50% Off</span>
            </p>
          </div>
          <div className="cards">
            <img src={serum3} alt="Serum 3" className="product-image" />
            <div className="rating">4.4★/5 (43.9k)</div>
            <p className="product-name">L'Oréal Paris Revitalift Serum</p>
            <p className="product-size">30ml</p>
            <p className="price">
              ₹599 <span className="original-price">₹999</span> <span className="discount">40% Off</span>
            </p>
          </div>
          <div className="cards">
            <img src={serum4} alt="Serum 4" className="product-image" />
            <div className="rating">4.5★/5 (113)</div>
            <p className="product-name">Nykaa Glow Brightening Serum</p>
            <p className="product-size">30ml</p>
            <p className="price">
              ₹404 <span className="original-price">₹539</span> <span className="discount">25% Off</span>
            </p>
          </div>
          <div className="cards">
            <img src={serum5} alt="Serum 5" className="product-image" />
            <div className="rating">4.5★/5 (73.8k)</div>
            <p className="product-name">The Derma Co. Hyaluronic Sunscreen</p>
            <p className="product-size">4 Sizes</p>
            <p className="price">
              ₹449 <span className="original-price">₹499</span> <span className="discount">10% Off</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="skin_slider">
    <img src={skinslider} alt="imhe"/>
    </div>

    <div class="curated-stores-container">
  <h2 class="curated-title">Curated Stores</h2>
  <div class="curated-stores-carousel">
    <div class="curated-card">
      <div class="curated-image-wrapper">
        <img src={winterglow} alt="Winter Glow" class="curated-image" />
      </div>
      <p class="curated-label">Winter Glow</p>
    </div>
    <div class="curated-card">
      <div class="curated-image-wrapper">
        <img src={night} alt="Night Routine" class="curated-image" />
      </div>
      <p class="curated-label">Night Routine</p>
    </div>
    <div class="curated-card">
      <div class="curated-image-wrapper">
        <img src={csms} alt="CSMS by Nykaa" class="curated-image" />
      </div>
      <p class="curated-label">CSMS by Nykaa</p>
    </div>
    <div class="curated-card">
      <div class="curated-image-wrapper">
        <img src={derama} alt="Dermo Cosmetics" class="curated-image" />
      </div>
      <p class="curated-label">Dermo Cosmetics</p>
    </div>
    <div class="curated-card">
      <div class="curated-image-wrapper">
        <img src={sunscreen} alt="The Sunscreen Store" class="curated-image" />
      </div>
      <p class="curated-label">The Sunscreen Store</p>
    </div>
  </div>
</div>
<footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        {/* <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div> */}
        {/* <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div> */}
      </div>
    </footer>     







        </div>

        
    );
}
export default Skin;
