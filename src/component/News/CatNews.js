import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./News.css";

const CatNews = () => {
  const images = [
    "https://media.gettyimages.com/id/82046046/photo/new-york-copies-of-the-new-york-times-sit-for-sale-in-a-rack-july-23-2008-in-new-york-city-the.jpg?s=612x612&w=gi&k=20&c=vbgiedYfopj1wZ8Ij_e-uiOp885zbgyyNWSFiSzL_FY=",
    "https://c8.alamy.com/comp/2PPHBGN/reading-the-new-york-times-newspaper-2PPHBGN.jpg",
    "https://c8.alamy.com/comp/D45DY5/the-thursday-february-28-2013-edition-of-the-international-herald-D45DY5.jpg",
    // Add more image URLs as needed
  ];

  const [currentImages, setCurrentImages] = useState([images[0], images[1]]);

  const handleNext = () => {
    const currentIndex = images.indexOf(currentImages[0]);
    const newIndex = (currentIndex + 1) % images.length;

    setCurrentImages([
      images[newIndex],
      images[newIndex + 1 === images.length ? 0 : newIndex + 1],
    ]);
  };

  return (
    <div className="cat-news bg mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row" style={{marginBottom:"-0.8rem"}}>
              <div className="col-md-6"><h2><i className="fas fa-futbol"></i>Sports</h2></div>
              <div className="col-md-6 next"><button
                type="button"
                className="btn btn-outline-primary "
                onClick={handleNext}
              >
                <i className="fas fa-solid fa-chevron-right"></i>
              </button></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* <img src={currentImages[0]} alt="Image 1" /> */}
                <div className="cn-img">
                  <img src={currentImages[0]} alt="" />
                  <div className="cn-content-inner">
                    <Link className="cn-date" to="">
                      <i className="far fa-clock"></i>05-Feb-2020
                    </Link>
                    <Link className="cn-title" to="">
                      Cras sed semper puru vitae lobortis velit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cn-img">
                  <img src={currentImages[1]} alt="" />
                  <div className="cn-content-inner">
                    <Link className="cn-date" to="">
                      <i className="far fa-clock"></i>05-Feb-2020
                    </Link>
                    <Link className="cn-title" to="">
                      Cras sed semper puru vitae lobortis velit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row" style={{marginBottom:"-0.8rem"}}>
              <div className="col-md-6"><h2><i className="fas fa-futbol"></i>Sports</h2></div>
              <div className="col-md-6 next"><button
                type="button"
                className="btn btn-outline-primary "
                onClick={handleNext}
              >
                <i className="fas fa-solid fa-chevron-right"></i>
              </button></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                {/* <img src={currentImages[0]} alt="Image 1" /> */}
                <div className="cn-img">
                  <img src={currentImages[0]} alt="" />
                  <div className="cn-content-inner">
                    <Link className="cn-date" to="">
                      <i className="far fa-clock"></i>05-Feb-2020
                    </Link>
                    <Link className="cn-title" to="">
                      Cras sed semper puru vitae lobortis velit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="cn-img">
                  <img src={currentImages[1]} alt="" />
                  <div className="cn-content-inner">
                    <Link className="cn-date" to="">
                      <i className="far fa-clock"></i>05-Feb-2020
                    </Link>
                    <Link className="cn-title" to="">
                      Cras sed semper puru vitae lobortis velit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatNews;
