import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = 3000;

let enteredUrl = "";
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/check", (req, res) => {

  enteredUrl = req.body["url"];
  var qr_svg = qr.image(enteredUrl, { ec_level: 'L', type: 'png' });
  qr_svg.pipe(fs.createWriteStream('public/Images/QR.png'));
  
  let image=1;

  res.render("index.ejs",{images: image});
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
