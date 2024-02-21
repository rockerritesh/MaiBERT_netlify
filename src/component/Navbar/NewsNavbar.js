import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";
// import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
import data from "../../data.json";

const NewsNavbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("/news");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );
  // const [initialRender, setInitialRender] = useState(true);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  useEffect(() => {
    // Apply styles based on the selected mode
    const root = document.documentElement;
    const modeColors = isDarkMode ? data.darkModeColors : data.lightModeColors;

    Object.entries(modeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Show a toast notification when mode is activated, but not on the initial render
    // if (!initialRender) {
    //   toast.dark(isDarkMode ? "Dark mode is active!" : "Light mode is active!");
    // } else {
    //   // It's the first render, update the initialRender state
    //   setInitialRender(false);
    // }
    // Save dark mode preference to localStorage
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const handleToggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "var(--color-white)" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            MaiBERT
          </a>
          <button
            className="navbar-toggler bg-black"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars customize"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {data.newsNavItems.map((item) => (
                    <li key={item.id} className="nav-item">
                      <Link
                        to={item.id}
                        className={`nav-link ${
                          activeNavItem === item.id ? "active" : ""
                        }`}
                        onClick={() => handleNavItemClick(item.id)}
                      >
                        <strong>{item.label}</strong>
                      </Link>
                    </li>
                  ))}
              {/* <li className="nav-item dropdown position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <strong>News</strong>
                  <i className="fas fa-chevron-down fs-8 px-2"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  {data.dropdownItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a className="dropdown-item" href="#">
                          {item.icon && (
                            <i
                              className={`fas ${item.icon}`}
                              style={{ marginRight: "0.5rem" }}
                            ></i>
                          )}
                          <b>{item.text}</b>
                        </a>
                      </li>
                      {index < data.dropdownItems.length - 1 && (
                        <li>
                          <hr
                            className="dropdown-divider"
                            style={{ color: "var(--color-black)" }}
                          />
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </li> */}
              {/* ... Other menu items ... */}
              <li className="nav-item mt-1">
                <button
                  className={`btn btn-toggle-mode ${
                    isDarkMode ? "dark-mode" : "light-mode"
                  }`}
                  onClick={handleToggleMode}
                >
                  {isDarkMode ? (
                    <i
                      className="fas fa-sun"
                      style={{ color: "var(--color-white)" }}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-moon"
                      style={{ color: "var(--color-black)" }}
                    ></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewsNavbar;
