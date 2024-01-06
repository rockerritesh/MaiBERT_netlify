import React from "react";
import "./News.css"
import { Link } from 'react-router-dom';

const MainNews = () => {
  return (
    <>
      <div className="main-news bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h2>
                    <i className="fas fa-align-justify"></i>Latest News
                  </h2>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mn-img">
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                      </div>
                      <div className="mn-content">
                        <Link className="mn-title" to="">
                          Cras commodo sem ut porta laoreet
                        </Link>
                        <Link className="mn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vivamus sed porta dui. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra
                          inceptos...
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mn-list">
                        <div className="mn-img">
                          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                        </div>
                        <div className="mn-content">
                          <Link className="mn-title" to="">
                            Pellentesque sit amet rutrum lacus
                          </Link>
                          <Link className="mn-date" to="">
                            <i className="far fa-clock"></i>05-Feb-2020
                          </Link>
                        </div>
                      </div>
                      <div className="mn-list">
                        <div className="mn-img">
                          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                        </div>
                        <div className="mn-content">
                          <Link className="mn-title" to="">
                            Proin id pretium orci, quis rhoncus eros
                          </Link>
                          <Link className="mn-date" to="">
                            <i className="far fa-clock"></i>05-Feb-2020
                          </Link>
                        </div>
                      </div>
                      <div className="mn-list">
                        <div className="mn-img">
                          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                        </div>
                        <div className="mn-content">
                          <Link className="mn-title" to="">
                            Curabitur viverra scelerisque tempor
                          </Link>
                          <Link className="mn-date" to="">
                            <i className="far fa-clock"></i>05-Feb-2020
                          </Link>
                        </div>
                      </div>
                      <div className="mn-list">
                        <div className="mn-img">
                          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                        </div>
                        <div className="mn-content">
                          <Link className="mn-title" to="">
                            Integer nec lorem facilisis interdum lorem non
                          </Link>
                          <Link className="mn-date" to="">
                            <i className="far fa-clock"></i>05-Feb-2020
                          </Link>
                        </div>
                      </div>
                      <div className="mn-list">
                        <div className="mn-img">
                          <img src="https://png.pngtree.com/thumb_back/fh260/background/20230313/pngtree-news-media-concept-laptop-photo-image_1930234.jpg" />
                        </div>
                        <div className="mn-content">
                          <Link className="mn-title" to="">
                            Interdum et malesuada fames
                          </Link>
                          <Link className="mn-date" to="">
                            <i className="far fa-clock"></i>05-Feb-2020
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
      </div>
    </>
  );
};

export default MainNews;
