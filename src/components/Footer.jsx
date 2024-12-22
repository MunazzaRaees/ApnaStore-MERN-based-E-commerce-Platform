import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <p>
              Stay connected with us on social media for the latest updates, offers, and news.
            </p>
          </div>
   

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {/* Use Link instead of <a> */}
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/product" className="text-white text-decoration-none">Products</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer" className="text-white me-3">
              <i className="fa fa-github fs-4"></i>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} ApnaStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
