import React from "react";
import "./News.css";
import { Link } from 'react-router-dom';

const TopNews = () => {
  return (
    <>
      <div className="top-news bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 tn-left">
              <div className="tn-img">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" />
                <div className="tn-content">
                  <div className="tn-content-inner">
                    <Link className="tn-date" to="">
                      <i className="far fa-clock"></i>05-Feb-2020
                    </Link>
                    <Link className="tn-title" to="">
                      Lorem ipsum dolor sit amet adipiscing elit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 tn-right">
              <div className="row">
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" />
                    <div className="tn-content">
                      <div className="tn-content-inner">
                        <Link className="tn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="tn-title" to="">
                          Integer faucibus pharetra odio
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" />
                    <div className="tn-content">
                      <div className="tn-content-inner">
                        <Link className="tn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="tn-title" to="">
                          Nulla vitae pharetra ligula
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" />
                    <div className="tn-content">
                      <div className="tn-content-inner">
                        <Link className="tn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="tn-title" to="">
                          Ut ac euismod tellus a blandit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tn-img">
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" />
                    <div className="tn-content">
                      <div className="tn-content-inner">
                        <Link className="tn-date" to="">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </Link>
                        <Link className="tn-title" to="">
                          Cras ac egestas sem nec euismod
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

export default TopNews;
