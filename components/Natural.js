import React from "react";
import'./Natural.css';
import wow from'../images/wow.avif';
import cofee from'../images/cofee.avif';
import plamsli from'../images/plamsli.avif';
import vlcc from'../images/vlcc.avif';
import clay from'../images/clay.avif';
import herbs from'../images/herbs.avif';
import himalaya from'../images/himalaya.avif';
import biotique from'../images/biotique.avif';
import lotus from'../images/lotus.avif';
import body from'../images/body.avif';
import earth from'../images/earth.avif';
import face from'../images/face.avif';
import haircar from'../images/haircar.avif';
import personal from'../images/personal.avif';
import make from'../images/make.avif';
import naturalslide from'../images/naturalslide.avif';

function Natural(){
    return(
        
            <div className="homess">
                {/* <img src={cofee} alt="imge1" /> */}
            
            <div className="carousels">
                <div className="carousel-containerss">
                    <div className="carousel-slides">
                        <img
                            src= {wow}
                            alt="Slide 1"
                        />
                    </div>
                    <div className="carousel-slides">
                        <img
                            src={cofee}
                            alt="Slide 2"
                        />
                    </div>
                    <div className="carousel-slides">
                        <img
                            src={plamsli}
                            alt="Slide 3"
                        />
                    </div>
                </div>
                {/* <button className="prevs" onClick={() => slideCarousel("prevs")}>
                    &#10094;
                </button>
                <button className="nexts" onClick={() => slideCarousel("nexts")}>
                    &#10095;
                </button> */}
            </div>
         
            <div className="image-grids">
      <div className="imagee-item">
        <img src={vlcc} alt="Placeholder 1" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={clay} alt="Placeholder 2" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={herbs} alt="Placeholder 3" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={himalaya} alt="Placeholder 4" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={biotique} alt="Placeholder 5" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={lotus} alt="Placeholder 6" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={body} alt="Placeholder 7" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
      <div className="imagee-item">
        <img src={earth} alt="Placeholder 8" />
        <h3 className="off">UP TO 50% OFFER</h3>
      </div>
    </div>
    <div className="things">
        <h2>ALL THINGS NATURAL CURATED  FOR YOU</h2>
    </div>
  
    <div className="image-row">
      <div className="image-iteem">
        <img src={face} alt="Placeholder 1" />
      </div>
      <div className="image-iteem">
        <img src={haircar} alt="Placeholder 2" />
      </div>
      <div className="image-iteem">
        <img src={personal} alt="Placeholder 3" />
      </div>
      <div className="image-iteem">
        <img src={make} alt="Placeholder 4" />
      </div>
    </div>  


    <div className="slide_nature">
        <img src={naturalslide} alt="image1"/>
    </div>
    

   

    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      
        
      </div>
    </footer>     

            



          
         

        </div>
    );
}
export default Natural;

function slideCarousel(direction) {
    const container = document.querySelector(".carousel-containerss");
    const slideWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;

    if (direction === "prevs") {
        container.scrollTo({
            left: currentScroll - slideWidth,
            behavior: "smooth",
        });
    } else if (direction === "nexts") {
        container.scrollTo({
            left: currentScroll + slideWidth,
            behavior: "smooth",
        });
    }
}