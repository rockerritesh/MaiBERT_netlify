import React from "react";
import NewsNavbar from "../Navbar/NewsNavbar";
import Footer from "../Footer/Footer";
import "./News.css";
import { useLocation } from "react-router-dom";

const NewsDesc = () => {
  const location = useLocation();
  return (
    <>
      <div className="newscontainer">
        <NewsNavbar />
        <div className="container-fluid fluidnews">
          <img
            className="imgstyle"
            src={
              location.state.imageUrl
                ? location.state.imageUrl
                : "https://th.bing.com/th/id/OIG4.9F3EXs056LkGaQHyeuza?pid=ImgGn"
            }
          ></img>
          <div className="container article">
            <h1 className="news-title">{location.state.title}</h1>
            <h3 className="news-subtitle">
              By {location.state.author} on {location.state.date}
            </h3>
            <div className="row">
              <img
                className="imgstyle1"
                src={
                  location.state.imageUrl
                    ? location.state.imageUrl
                    : "https://th.bing.com/th/id/OIG4.9F3EXs056LkGaQHyeuza?pid=ImgGn"
                }
              ></img>
            </div>
            <div className="row item-style">
              <p>{location.state.description}</p>
            </div>
            <hr></hr>
            <div className="row item-style">
              <p>
                <h3 className="text-center">Description in English</h3>
                <hr></hr>
                {location.state.englishDescription}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NewsDesc;
