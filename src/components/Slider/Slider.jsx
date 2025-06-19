import React, { useEffect, useState, useRef } from "react";
import "./Slider.css";

const slides = [
  {
    image: "/img/1.jpg",
    title: "The Town Studio",
    desc1:
      "Capturing moments that become memories, preserving the magic of now for the generations to come.",
    desc2: "Freeze time. Frame emotion.",
  },
  {
    image: "/img/2.jpg",
    title: "The MAGICAL moments",
    desc1:
      "More than pictures — we create timeless keepsakes that carry the warmth of the moment they were born in.",
    desc2:
      "Photography is the pause button on life — a chance to hold on to what matters most",
  },
  {
    image: "/img/3.jpg",
    title: "Capture the moment",
    desc1:
      "Because every moment deserves to be remembered beautifully — in portraits that speak louder than words",
    desc2:
      "You live the moment, we frame it forever — with care, creativity, and an eye for detail.",
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);
  const lastPosition = slides.length - 1;
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const goToNext = () => {
    setActive((prev) => (prev === lastPosition ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActive((prev) => (prev === 0 ? lastPosition : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timerRef.current);
  }, [active]);

  // Resize diameter for circular effect
  useEffect(() => {
    const updateDiameter = () => {
      const slider = document.querySelector(".slider");
      if (!slider) return;
      const w = slider.offsetWidth;
      const h = slider.offsetHeight;
      const d = Math.sqrt(w * w + h * h);
      document.documentElement.style.setProperty("--diameter", `${d}px`);
    };

    updateDiameter();
    window.addEventListener("resize", updateDiameter);
    return () => window.removeEventListener("resize", updateDiameter);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // swiped left
      goToNext();
    } else if (distance < -50) {
      // swiped right
      goToPrev();
    }

    // reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === active ? "active" : ""}`}
            key={index}
          >
            <div
              className="image"
              style={{ "--url": `url(${slide.image})` }}
            ></div>
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.desc1}</p>
              <p>{slide.desc2}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={goToPrev} className={active === 0 ? "d-none" : ""}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className={active === lastPosition ? "d-none" : ""}
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
