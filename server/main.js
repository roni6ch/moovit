// Question 2
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.listen(port, () => {
  console.clear();
  console.log(`Server running on port ${port}!!`);
});

app.post("/submit", (req, res) => {
  let params = req.body;
  if (validateParams(params)) {
    const now = new Date();
    try {
      fs.writeFile(
        `registration_${now.formattedDate()}.txt`,
        JSON.stringify(params),
        (err) => {
          if (err) {
            throw new Error("Bad File");
          }
          return res.status(200).send("Form submitted successfully!");
        }
      );
    } catch (error) {
      console.log("error", error);
      return res.status(501).send({ error });
    }
  } else return res.status(400).json({ error: "Bad inputs" });
});
const validateParams = (params) => {
  for (const key in params) {
    const isValid =
      typeof key !== "undefined" &&
      key !== null &&
      typeof params[key] !== "undefined" &&
      params[key] !== null &&
      params[key] !== "";
    if (!isValid) return false;
  }
  return true;
};
Date.prototype.formattedDate = function () {
  const day = this.getDate();
  const month = this.getMonth() + 1;
  const year = this.getFullYear();
  const hour = this.getHours();
  const minutes = this.getMinutes();
  const seconds = this.getSeconds();
  return [
    (day < 9 ? "0" : "") + day,
    (month < 9 ? "0" : "") + month,
    year,
    "_",
    (hour < 9 ? "0" : "") + hour,
    (minutes < 9 ? "0" : "") + minutes,
    (seconds < 9 ? "0" : "") + seconds,
  ].join("");
};
