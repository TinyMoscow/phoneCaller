const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("dist"));

mongoose.connect("mongodb://localhost:27017");

const phoneSchema = new mongoose.Schema({
  number: String,
  id: Number,
  startDate: Number,
  endDate: Number,
  active: Boolean,
});

const Phone = mongoose.model("phonelists", phoneSchema);

const phones = [];

app.get("/phones", async (req, res) => {
  res.send(await Phone.find());
});
app.post("/phone", async (req, res) => {
  const phone = new Phone({ ...req.body });
  await phone.save();

  res.send(await Phone.find());
});
app.delete("/phone/:id", async (req, res) => {
  await Phone.deleteOne({ id: Number(req.params.id) });
  res.send(await Phone.find());
});

app.listen(8080, () => console.log("Started server at http://localhost:8080"));
