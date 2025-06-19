import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./form.css"; // Link to the CSS file

const Form = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="form-container">
      <section className="form-header">
        <h1>Contact Us Here</h1>
        <p>We will contact you promptly</p>
      </section>

      <section className="form-wrapper">
        <form
          action="https://formsubmit.co/contact@weconetdata.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="full name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="email address"
            required
          />
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              color: "black",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              paddingLeft: "48px",
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
            containerStyle={{ width: "100%" }}
            inputProps={{
              name: "phone",
              required: true,
            }}
          />
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
