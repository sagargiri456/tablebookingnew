import React, { useState } from "react";
import axios from "axios";
import "./Laurels.css";

const Book = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    numberofguests: "1",
    bookingdate: "",
    bookingtime: "none",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://tablebookingnew.onrender.com/app/book", formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    alert("Your booking has been confirmed");
    window.location = "/";
  };

  return (
    <div className="app-container-div">
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">
          Enter Your Details to book a table
        </h1>
      </div>
      <div className="form-div">
        <form onSubmit={onSubmit}>
          <label htmlFor="firstname">First Name </label>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            required
          />
          <br />
          <label htmlFor="lastname">Last Name </label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            required
          />
          <br />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <br />
          <label htmlFor="phone">Phone </label>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            pattern="[0-9]{10}"
            required
          />
          <br />
          <label htmlFor="numberofguests">Number of guests </label>
          <input
            type="number"
            name="numberofguests"
            onChange={handleChange}
            value={formData.numberofguests}
            min="1"
            max="20"
          />
          <br />
          <label htmlFor="bookingdate">Date </label>
          <input
            type="date"
            name="bookingdate"
            onChange={handleChange}
            value={formData.bookingdate}
            required
          />
          <br />
          <label htmlFor="bookingtime">Time </label>
          <select
            name="bookingtime"
            onChange={handleChange}
            value={formData.bookingtime}
            required
          >
            <option value="none" disabled hidden>
              Select time
            </option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
          </select>
          <br />
          <div className="book_custom__button">
            <input type="submit" value="Confirm your booking!" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
