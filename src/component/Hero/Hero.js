import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-banner py-4">
      <div className="container hero rounded-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-2 shadow-lg shadow-y">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h3 className="display-5 fw-bold lh-2 text-body-emphasis styles">
              Get Close to <strong>Maithili</strong> Language more with{" "}
              <br></br>
              <span className="slide-in-bump">
                <strong>MaiBERT</strong>
              </span>
              <hr></hr>
            </h3>
            <p className="lead styles">
              "Immerse in Maithili Language Intelligence! Elevate your experience
              with our Maithili Text Classification Project. Explore the depths
              of BERT architecture as we enhance understanding, build robust
              models, expand language support, and provide a user-friendly
              interface. Join us on a journey of linguistic innovation, where
              every word matters and every classification refines our language
              understanding. Welcome to the future of Maithili text analysis."
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                href="/"
                className="btn btn-outline-secondary btn-lg border styles"
              >
                Try Now For Free
              </a>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 mb-5 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 rounded-top-left-0 rounded-bottom-left-0"
              src="https://www.spectos.com/wp-content/uploads/2022/04/spectos-hubble-machine-learning-artificial-intelligence.jpg"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
