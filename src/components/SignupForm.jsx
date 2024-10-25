import React from "react";
import { useState } from "react";
import "./Signup.css";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
    uniqueCode: "",
  });
  // handle input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // generate a random unique code
  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setFormData({
      ...formData,
      uniqueCode: code,
    });
  };

  // handle Change
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all required fields.");
      return;
    }
    console.log("FormData", formData);
  };

  return (
    <div className="Signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          MobileNumber:
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Unique Code:
          <input
            type="text"
            name="uniqueCode"
            value={formData.uniqueCode}
            onChange={handleChange}
            readOnly
          />
          <button  type="button" onClick={generateCode}>Generate-code</button>
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
