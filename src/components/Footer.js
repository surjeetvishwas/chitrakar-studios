import React from "react";
import "./footer.css";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="sign-in">
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready For Shopping</h3>
              <h3>Contact Us Today</h3>
            </div>
            <div className="contact-short-btn">
              <a aria-current="page" className="active" href="/">
                <button className="btn">Sign In</button>
              </a>
            </div>
          </div>
        </section>
      </section>

      {/* main footer start */}
      <footer>
        <div className="grid-four-column">
          <div className="footer-about">
            <h3>Chitrakar Studios</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="footer-subscription">
            <h3>Newsletter</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="submit" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>=91XXXXXXXXX</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
            <hr/>
          <div className="container grid grid-two-coloumn">
            <p>"ChitrakarStudios. All Rights Reserved"</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
