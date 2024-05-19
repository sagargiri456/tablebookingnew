const express = require("express");
const router = express.Router();
const bookingTemplateCopy = require("../models/bookingmodel");

// POST route to create a new booking
router.post("/book", (request, response) => {
  const newbooking = new bookingTemplateCopy({
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    phone: request.body.phone,
    numberofguests: request.body.numberofguests,
    bookingdate: request.body.bookingdate,
    bookingtime: request.body.bookingtime,
  });

  newbooking
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
  console.log("Successfully added to database");
});

// GET route for a simple text response
router.get("/sagar", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Hello Sagar",
  });
});

// GET route to download a file
router.get("/menu", (req, res) => {
  console.log("file downloaded");

  res.download("./Files/menu.pdf", (err) => {
    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
