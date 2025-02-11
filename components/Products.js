import React from "react";
import './Products.css';
import hair from'../images/hair.gif';
import olaplex from'../images/olaplex.avif';
import ordinary from'../images/ordinary.avif';
import soulflowe from'../images/soulflowe.avif';
import oziva from'../images/oziva.avif';
import streax from'../images/streax.avif';
import redken from'../images/redken.avif';
import forlesss from'../images/forlesss.avif';
import morocca from'../images/morocca.avif';
import fable from'../images/fable.avif';
import dovedove from'../images/dovedove.avif';
import headshoul from'../images/headshoul.avif';
import shea from'../images/shea.avif';
import anomal from'../images/anomal.avif';
import parashute from'../images/parashute.avif';
import naturali from'../images/naturali.avif';
import trend from'../images/trend.avif';
import frizzy from'../images/frizzy.avif';
import hairfall from'../images/hairfall.avif';
import dry from'../images/dry.avif';
import curly from'../images/curly.avif';
import dandruf from'../images/dandruf.avif';
import Colour from'../images/colour.avif';




function Products(){
    return(
        <div className="hairslide" >
            <img src={hair} alt="image"/>

            <div className="hair-sale">
      <h1>BIGGEST DEALS OF THE YEAR</h1>
      <div className="product-grid">
        <div className="product-card">
          <img src={olaplex} alt="Olaplex" />
          <h2>Olaplex</h2>
          <p>Flat 20% Off</p>
          <p>Gifts On ₹3000</p>
        </div>
        <div className="product-card">
          <img src={ordinary} alt="The Ordinary" />
          <h2>The Ordinary</h2>
          <p>Science-Backed</p>
          <p>Starting At ₹600</p>
        </div>
        <div className="product-card">
          <img src={soulflowe} alt="Soulflower" />
          <h2>Soulflower</h2>
          <p>Up To 50% Off</p>
          <p>On Haircare Bestsellers</p>
        </div>
        <div className="product-card">
          <img src={oziva} alt="Oziva" />
          <h2>Oziva</h2>
          <p>Up To 50% Off</p>
          <p>Extra 10% Off On ₹899</p>
        </div>
        <div className="product-card">
          <img src={streax} alt="Streax" />
          <h2>Streax</h2>
          <p>Up To 25% Off</p>
          <p>On Entire Range</p>
        </div>
        <div className="product-card">
          <img src={redken} alt="Redken" />
          <h2>Redken</h2>
          <p>Up To 20% Off</p>
          <p>2 Free Minis On ₹2499+</p>
        </div>
      </div>
    </div>

    <div className="forlas">
        <img src={forlesss} alt="imge"/>
    </div>

    <div className="deals-section">
      <h1>ONLY BIGGER, BETTER DEALS</h1>
      <div className="deals-grid">
        {/* Row 1 */}
        <div className="deal-card">
          <img src={morocca} alt="Moroccanoil" />
          <h2>Moroccanoil</h2>
          <p>Savings Up To 25%</p>
          <p>+ Free Gift worth ₹1620</p>
        </div>
        <div className="deal-card">
          <img src={dovedove} alt="Dove" />
          <h2>Dove</h2>
          <p>Flat 50% Off</p>
          <p>Extra 10% Off On ₹699*</p>
        </div>
        <div className="deal-card">
          <img src={headshoul} alt="Head & Shoulders" />
          <h2>Head & Shoulders</h2>
          <p>Flat 50% Off</p>
          <p>On Haircare Bestsellers</p>
        </div>
        <div className="deal-card">
          <img src={shea} alt="Shea Moisture" />
          <h2>Shea Moisture</h2>
          <p>Up To 30% Off</p>
          <p>On All Orders</p>
        </div>

        {/* Row 2 */}
        <div className="deal-card">
          <img src={anomal} alt="Anomaly" />
          <h2>Anomaly</h2>
          <p>Buy 1 Get 1 Free</p>
          <p>Combos At 50% Off</p>
        </div>
        <div className="deal-card">
          <img src={fable} alt="Fable & Mane" />
          <h2>Fable & Mane</h2>
          <p>Flat 25% Off</p>
          <p>On All Orders</p>
        </div>
        <div className="deal-card">
          <img src={parashute} alt="New Brand 1" />
          <h2>New Brand 1</h2>
          <p>Special Discount</p>
          <p>Limited Time Offer</p>
        </div>
        <div className="deal-card">
          <img src={naturali} alt="New Brand 2" />
          <h2>New Brand 2</h2>
          <p>Up To 40% Off</p>
          <p>On Select Items</p>
        </div>
      </div>
    </div>

    <div className="trend_slide">
        <img src={trend} alt="image"/>
    </div>

    <div className="shop-by-concern">
      <div className="concern-header">
        <h1>Shop By Concern</h1>
      </div>
      <div className="concern-container">
        <div className="concern-card">
          <img src={frizzy} alt="Frizzy Hair" />
          <p>Frizzy Hair</p>
        </div>
        <div className="concern-card">
          <img src={hairfall} alt="Hair Fall & Growth" />
          <p>Hair Fall & Growth</p>
        </div>
        <div className="concern-card">
          <img src={dry} alt="Dry & Damaged" />
          <p>Dry & Damaged</p>
        </div>
        <div className="concern-card">
          <img src={curly} alt="Curly Hair" />
          <p>Curly Hair</p>
        </div>
        <div className="concern-card">
          <img src={dandruf} alt="Dandruff" />
          <p>Dandruff</p>
        </div>
        <div className="concern-card">
          <img src={Colour} alt="Colour Protection" />
          <p>Colour Protection</p>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      
        
      </div>
    </footer>  




        </div>

    );
}

export default Products;