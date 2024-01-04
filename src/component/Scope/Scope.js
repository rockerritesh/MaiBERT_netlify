import React from "react";
import "./Scope.css";
import scopeimg from "../../assets/scope.jpg";

const Scope = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8 scope" id="scope">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3 text-center">Lets See what scopes are: </h2>
                <hr></hr>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-language icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Addressing Maithili's Linguistic Challenges
                        </h4>
                        <p className="mb-0">
                          Tailor language models specifically for Maithili,
                          addressing linguistic subtleties and complexities
                          unique to the language. This focused approach ensures
                          precision and relevance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-cogs icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Harnessing Advanced NLP Technology
                        </h4>
                        <p className="mb-0">
                          Integrate cutting-edge NLP techniques, machine
                          learning algorithms, and model architectures, striking
                          a balance between technological sophistication and
                          practical viability in the context of Maithili.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-list-alt icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Empowering Maithili Text Classification
                        </h4>
                        <p className="mb-0">
                          Develop models to classify and understand nuances in
                          Maithili text, contributing to advancements in
                          sentiment analysis, topic classification, and other
                          NLP tasks within the Maithili language domain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-clipboard-check icon"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Real-world Deployment in Maithili Context
                        </h4>
                        <p className="mb-0">
                          Extend beyond language representation to practical
                          applications, focusing on text classification.
                          Envision deploying models in real-world scenarios,
                          ensuring their relevance and impact within the
                          Maithili language context.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded "
              loading="lazy"
              src={scopeimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
