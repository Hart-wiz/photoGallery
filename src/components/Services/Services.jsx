import React from "react";
import "./services.css";
import event from "../../assets/event.png";
import portra from "../../assets/portra.png";
import photoedit from "../../assets/photo-edit.png";

const Services = () => {
  const Services = [
    {
      image: event,
      title: "Event Photography ",
      desc: "Event planning and photo shooting is our core expertise",
    },
    {
      image: portra,
      title: "Portrait Photography ",
      desc: "Event planning and photo shooting is our core expertise",
    },
    {
      image: photoedit,
      title: "Edit Photography ",
      desc: "Event planning and photo shooting is our core expertise",
    },
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      <section>
        {Services.map((Service, index) => (
          <div>
            <img src={Service.image} alt="icon" />
            <h2>{Service.title}</h2>
            <p>{Service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
