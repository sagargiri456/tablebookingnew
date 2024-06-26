const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://sagargiri456:pass%40123@cluster0.la3f9jt.mongodb.net/FoodOrder?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error: " + err));


app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

app.listen(4000, () => console.log("server is up and running"));
