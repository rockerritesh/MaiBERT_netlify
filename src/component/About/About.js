import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8 about" id="about">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src="https://www.gantter.com/wp-content/uploads/2020/10/shutterstock_1059219380-980x812.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3 text-center">Why We Selected This Project?</h2>
                <hr></hr>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-language icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Enhance Maithili Text Understanding
                        </h4>
                        <p className="mb-0">
                          Develop and fine-tune BERT models to improve the
                          understanding of Maithili language, enabling accurate
                          and context-aware text classification.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-cogs icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Build a Robust Text Classification Model
                        </h4>
                        <p className="mb-0">
                          Train a robust BERT-based text classification model
                          capable of handling the low-resource nature of
                          Maithili, ensuring high accuracy and reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-globe icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Expand Maithili Language Support
                        </h4>
                        <p className="mb-0">
                          Explore methods to expand the language model's support
                          for Maithili by incorporating additional linguistic
                          nuances, dialects, and expressions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-hand-pointer icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Promoting Accessible Information
                        </h4>
                        <p className="mb-0">
                          Develop an accessible web interface, empowering users
                          to effortlessly input Maithili text and obtain precise
                          classification results in a manner that is both
                          intuitive and user-friendly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
