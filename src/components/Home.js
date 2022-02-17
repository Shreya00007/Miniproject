import React, { Component } from 'react';


import  About from "./Images/about-photo.jpg"
import  About1 from "./Images/food1 (1).jpg"
import  About2 from "./Images/food2.jpg"
import  About3 from "./Images/food3.jpg"
import  About4 from "./Images/food4.jpg"
import  About5 from "./Images/food5.jpg"
import  About6 from "./Images/food6.jpg"
import  About7 from "./Images/food7.jpg"
import  About8 from "./Images/food8.jpg"
import  About9 from "./Images/food9.jpg"
import  About10 from "./Images/feed1.jpg"
import  About11 from "./Images/feed2.jpg"
import  About12 from "./Images/feed3.jpg"
import  About13 from "./Images/feed4.jpg"




class Home extends Component {
    render() {
        return (
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Restraunt</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="style.css" />
 
  <section className="showcase-area" id="showcase">
    <div className="showcase-container">
      <h1 className="main-title" id="home">
        Eat Right Food
      </h1>
      <p>Eat Healty, it is good for our health.</p>
      <a href="#food-menu" className="btn btn-primary">
        Menu
      </a>
    </div>
  </section>
  <section id="about">
    <div className="about-wrapper container">
      <div className="about-text">
        <p className="small">About Us</p>
        <h2>We've beem making healthy food last for 10 years</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab eos
          omnis, nobis dignissimos perferendis et officia architecto, fugiat
          possimus eaque qui ullam excepturi suscipit aliquid optio, maiores
          praesentium soluta alias asperiores saepe commodi consequatur?
          Perferendis est placeat facere aspernatur!
        </p>
      </div>
      <div className="about-img">
        <img src={About} alt="food" />
      </div>
    </div>
  </section>
  <section id="food">
    <h2>Types of food</h2>
    <div className="food-container container">
      <div className="food-type fruite">
        <div className="img-container">
          <img src={About1} alt="error" />
          <div className="img-content">
            <h3>fruite</h3>
            <a
              href="#Fruit"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="food-type vegetable">
        <div className="img-container">
          <img src={About2} alt="error" />
          <div className="img-content">
            <h3>vegetable</h3>
            <a
              href="https://en.wikipedia.org/wiki/Vegetable"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
      <div className="food-type grin">
        <div className="img-container">
          <img src={About3} alt="error" />
          <div className="img-content">
            <h3>grin</h3>
            <a
              href="https://en.wikipedia.org/wiki/Grain"
              className="btn btn-primary"
              target="blank"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="food-menu">
    <h2 className="food-menu-heading">Food Menu</h2>
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About4} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About5} alt="error" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About6} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About7} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About8} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src={About9} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Food Menu Item 6</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.
          </p>
          <p className="food-price">Price: ₹ 250</p>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials">
    <h2 className="testimonial-title">What Our Customers Say</h2>
    <div className="testimonial-container container">
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src={About10} alt="" />
            <p className="customer-name">Ross Lee</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src={About11} alt="" />
            <p className="customer-name">Amelia Watson</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
      <div className="testimonial-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src={About12} alt="" />
            <p className="customer-name">Ben Roy</p>
          </div>
        </div>
        <div className="star-rating">
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
        </div>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="contact-container container">
      <div className="contact-img">
        <img src={About13} alt="" />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea
          cols={30}
          rows={6}
          placeholder="Type Your Message"
          defaultValue={""}
        />
        <a href="#" className="btn btn-primary">
          Submit
        </a>
      </div>
    </div>
  </section>
  <footer id="footer">
    <h2>Restaurant © all rights reserved</h2>
  </footer>
  {/* 
    .................../ JS Code for smooth scrolling /...................... */}
</>
);
    }
}

export default Home;