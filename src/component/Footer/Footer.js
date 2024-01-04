import React from "react";
import "./Footer.css";
import data from "../../data.json"

const Footer = () => {
  const FooterStyle = {
    backgroundColor: "var(--color-white)",
    bottom: 0,
    width: "100%",
    color: "var(--color-black)",
  };

  return (
    <footer className="text-center text-lg-start" style={FooterStyle}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="/" className="me-4 text-no-decoration">
            <i className="fab fa-facebook-f "></i>
          </a>
          <a href="" className="me-4 text-no-decoration">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-no-decoration">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-no-decoration">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-no-decoration">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <a className="navbar-brand" href="/">
                MaiBERT
              </a>
              <p className="my-2">
                {data.footer.tagline}
              </p>
            </div>
            {/* Grid column */}

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Service</h6>
              {data.services.map((service, index) => (
                <p key={index}>
                  <a href={service.link} className="text-no-decoration">
                    {service.name}
                  </a>
                </p>
              ))}
            </div>
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              {data.usefulLinks.map((link, index) => (
                <p key={index}>
                  <a href={link.link} className="text-no-decoration">
                    {link.label}
                  </a>
                </p>
              ))}
            </div>
            {/* Grid column */}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              {data.contactInfo.map((info, index) => (
                <p key={index}>
                  <i className={info.icon + " me-3"}></i> {info.text}
                </p>
              ))}
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className="fw-bold text-no-decoration1" href="/">
          MaiBERT.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    // Footer
  );
};

export default Footer;
