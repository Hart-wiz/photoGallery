"use client";
import React, { useState } from "react";
import "./testimonial.css"; // Link to the CSS file

const testimonials = [
  {
    name: "Jane Doe",
    role: "CEO, GWUS Corp",
    quote:
      "Very perfect coverage for my wedding transformed our business with their innovative solutions. Their team is professional, responsive, and truly cares about our success.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CTO, BetaTech",
    quote:
      "The custom app they built for us streamlined our workflow and increased productivity. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "Product Manager, RealFabrications Inc.",
    quote:
      "Excellent communication and top-notch results. We will definitely work with WeconetData again.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-container">
        <button
          onClick={prevSlide}
          className="arrow-btn prev"
          aria-label="Previous testimonial"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 22l-8-8 8-8" />
          </svg>
        </button>

        <div className="testimonial-card">
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].name}
            className="testimonial-avatar"
          />
          <p className="testimonial-quote">“{testimonials[current].quote}”</p>
          <div className="testimonial-name">{testimonials[current].name}</div>
          <div className="testimonial-role">{testimonials[current].role}</div>
        </div>

        <button
          onClick={nextSlide}
          className="arrow-btn next"
          aria-label="Next testimonial"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 6l8 8-8 8" />
          </svg>
        </button>
      </div>

      <div className="testimonial-mobile-controls">
        <button
          onClick={prevSlide}
          className="mobile-btn"
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={nextSlide} className="mobile-btn" aria-label="Next">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`dot ${idx === current ? "active" : ""}`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
