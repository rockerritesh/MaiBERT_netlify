import React from "react";

const LimitationEnhancement = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8 limi" id="limi">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3 text-center">Limitations</h2>
                <hr></hr>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-database icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Limited Data Availability</h4>
                        <p className="mb-0">
                          The success of our project heavily depends on the
                          availability of sufficient data, and limitations in
                          data quantity and quality can impact the model's
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-tags icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Absence of Labeled Data</h4>
                        <p className="mb-0">
                          The absence of labeled data poses challenges for
                          supervised learning approaches, hindering the
                          acquisition of specific task-oriented data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-puzzle-piece icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Incompleteness of Captured Features
                        </h4>
                        <p className="mb-0">
                          Due to limitations in data capturing, certain vital
                          features may not have been adequately represented,
                          affecting the model's ability to generalize across
                          diverse scenarios.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-chart-line icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">
                          Promoting Accessible Information
                        </h4>
                        <p className="mb-0">
                          The limitations in data quality and quantity can
                          impact the overall performance of the model,
                          influencing its ability to provide accurate and
                          reliable results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11 mt-3">
                <h2 className="h1 mb-3 text-center">Enhancement</h2>
                <hr></hr>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-layer-group icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Enhancing Diversity</h4>
                        <p className="mb-0">
                          Increasing the diversity of the dataset contributes to
                          a more robust and generalizable model. Exploring
                          additional data sources and scenarios enhances
                          adaptability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-tools icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Fine-Tuning Strategies</h4>
                        <p className="mb-0">
                          Further fine-tuning of model parameters and
                          architecture can lead to improved performance.
                          Experimenting with optimization techniques contributes
                          to better model convergence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-sliders-h icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Hyperparameter Tuning</h4>
                        <p className="mb-0">
                          Systematic exploration and optimization of
                          hyperparameters significantly impact model
                          performance. Thorough examination is needed to
                          identify optimal configurations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 my-2">
                    <div className="d-flex">
                      <div className="me-4">
                        <i className="fas fa-desktop icon1"></i>
                      </div>
                      <div className="px-2">
                        <h4 className="mb-3">Application Development</h4>
                        <p className="mb-0">
                          Translating the model into a practical application
                          extends its utility. Building an application based on
                          the model facilitates real-world usage.
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

export default LimitationEnhancement;
