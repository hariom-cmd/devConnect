const express = require("express");
const app = express();

// // Career page
// app.use("/career", (req, res) => {
//   res.send("Career page.");
// });

// // Contact page
// app.use("/contact", (req, res) => {
//   res.send("Contact us page.");
// });

// // About page
// app.use("/about", (req, res) => {
//   res.send("About our team.");
// });

// // Home page (specific path) 
// app.use("/home", (req, res) => {
//   res.send("Welcome to the home.");
// });

// // Home page (specific path) =====> this general route must be the last because Express executes middle from top to bottom
// app.use("/", (req, res) => {
//   res.send("Welcome to the General route.");
// });


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000.");
});


app.get("/home", (req, res) => {
    res.end("This is Home page.")
})