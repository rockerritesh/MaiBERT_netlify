import React from "react";
import "./News.css";
import { Link } from 'react-router-dom';

const CategoryNews = () => {
  return (
    <>
      <div className="cat-news bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Sports
              </h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
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
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <Link className="cn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="cn-title" to="">
                          Vestibulum ante ipsum primis
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <Link className="cn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="cn-title" to="">
                          Sed quis convallis lacus
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>
                 Sports
              </h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <Link className="cn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="cn-title" to="">
                          Vivamus vel felis nec magna
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <Link className="cn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="cn-title" to="">
                          Phasellus vitae fermentum est
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cn-img">
                    <img src="https://media.istockphoto.com/id/1211281064/photo/mockup-of-coronavirus-newspaper-news-related-of-the-covid-19-with-the-the-headline-in-paper.jpg?s=612x612&w=0&k=20&c=JLzNp0kzvA3bQu_pDlZJiluCsVAPQTu1S-oJ-nKnT3M=" />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <Link className="cn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="cn-title" to="">
                          Aenean ut varius dui
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryNews;
