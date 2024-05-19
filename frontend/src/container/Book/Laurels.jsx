import axios from "axios";
import React, { useState } from "react";
import "./Laurels.css";

const Book = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [numberofguests, setNumberofguests] = useState("1");
  const [bookingdate, setBookingdate] = useState("2022-11-21");
  const [bookingtime, setBookingtime] = useState("none");

  const onSubmit = (event) => {
    event.preventDefault();
    const booked = {
      firstname,
      lastname,
      email,
      phone,
      numberofguests,
      bookingdate,
      bookingtime,
    };
    axios
      .post("https://tablebookingnew.onrender.com/app/book", booked)
      .then((response) => console.log(response.data));
    alert("Your booking has been confirmed");
    window.location = "/";
  };

  return (
    <div className="app-container-div">
           {" "}
      <div className="app__specialMenu-title">
               {" "}
        <h1 className="headtext__cormorant">
          Enter Your Details to book a table
        </h1>
             {" "}
      </div>
           {" "}
      <div className="form-div">
               {" "}
        <form onSubmit={onSubmit}>
                    <label htmlFor="fname">First Name </label>         {" "}
          <input
            type="text"
            placeholder="First Name"
            id="fname"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            required
          />
          <br />          <label htmlFor="lname">Last Name </label>         {" "}
          <input
            type="text"
            placeholder="Last Name"
            id="lname"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
          />
          <br />          <label htmlFor="email">Email </label>         {" "}
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <br />          <label htmlFor="phone">Phone </label>         {" "}
          <input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            pattern="[0-9]{10}"
            required
          />
          <br />          <label htmlFor="guests">Number of guests </label>     
             {" "}
          <input
            type="number"
            id="guests"
            onChange={(e) => setNumberofguests(e.target.value)}
            value={numberofguests}
            min="1"
            max="20"
          />
          <br />          <label htmlFor="date">Date </label>         {" "}
          <input
            type="date"
            id="date"
            onChange={(e) => setBookingdate(e.target.value)}
            value={bookingdate}
            min="2022-11-21"
            max="2022-12-20"
            required
          />
          <br />          <label htmlFor="time">Time </label>         {" "}
          <select
            name="time"
            id="time"
            onChange={(e) => setBookingtime(e.target.value)}
            value={bookingtime}
            required
          >
                       {" "}
            <option value="none" disabled hidden>
              Select time
            </option>
                        <option value="11:00">11:00</option>           {" "}
            <option value="12:00">12:00</option>           {" "}
            <option value="13:00">13:00</option>           {" "}
            <option value="14:00">14:00</option>           {" "}
            <option value="18:00">18:00</option>           {" "}
            <option value="19:00">19:00</option>           {" "}
            <option value="20:00">20:00</option>           {" "}
            <option value="21:00">21:00</option>         {" "}
          </select>
          <br />         {" "}
          <div className="book_custom__button">
                        <input type="submit" value="Confirm your booking!" />   
                 {" "}
          </div>
                 {" "}
        </form>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default Book;
