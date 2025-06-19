import React from "react";
// import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo + Tagline */}
          <div className="footer-brand">
            <h2>MR</h2>
            <p>
              Building the future of the web with scalable, reliable, and secure
              solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/docs">Documentation</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="footer-contact">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a
                href="https://wa.me/+16727631514"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/+16727631514"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/+16727631514"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/+16727631514"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+16727631514"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p>
              <FaEnvelope /> contact@gallery.com
            </p>
            <p>
              <FaPhone /> +1 (672) 763-1514
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Weconetdata. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
