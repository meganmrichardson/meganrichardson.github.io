import React from "react";
import "./home.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand">
          <a href="/" className="brand-name">
            My Personal Website
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="index.html"
              className="button"
              //   style="color: rgb(73, 151, 101);"
            >
              <div className="tabicon">
                <span className="fa-solid fa-mountain-city"></span>
              </div>
              <p className="tabtext">HOME</p>
            </a>
          </li>
          <li>
            <a
              href="experience.html"
              className="button"
              //   style="color: rgb(218, 122, 194);"
            >
              <div className="tabicon">
                <span className="fa-solid fa-book"></span>
              </div>
              <p className="tabtext">EXPERIENCE</p>
            </a>
          </li>
          <li>
            <a
              href="gallery.html"
              className="button"
              //   style="color: rgb(220, 120, 90);"
            >
              <div className="tabicon">
                <span className="fa-solid fa-palette"></span>
              </div>
              <p className="tabtext">GALLERY</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
