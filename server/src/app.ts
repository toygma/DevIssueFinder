import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bu bir html sayfasidir</h1>");
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
