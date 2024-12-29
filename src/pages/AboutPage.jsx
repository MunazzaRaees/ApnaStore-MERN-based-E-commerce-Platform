import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our e-commerce platform, where innovation meets convenience.
          Our mission is to provide you with a seamless shopping experience, offering
          a curated selection of high-quality products from trusted international brands. We take pride
          in delivering exceptional value and customer satisfaction at every step.
        </p>

        <h2 className="text-center py-4">Our Categories</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100" onClick={() => handleCategoryClick("men's clothing")}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Men's Clothing"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
                <p className="text-center">Explore stylish and comfortable outfits for every occasion.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100" onClick={() => handleCategoryClick("women's clothing")}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women's Clothing"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
                <p className="text-center">Discover the latest trends and timeless classics for women.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100" onClick={() => handleCategoryClick("jewelery")}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewelry"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
                <p className="text-center">Adorn yourself with elegant and timeless pieces.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100" onClick={() => handleCategoryClick("electronics")}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Electronics"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
                <p className="text-center">Stay ahead with the latest gadgets and technology devices.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Why Choose Us?</h2>
        <p className="text-center">
          Our dedication to quality and customer satisfaction sets us apart. We strive to offer an easy, 
          secure, and enjoyable shopping experience. Join our community of happy customers and 
          experience the difference today.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
