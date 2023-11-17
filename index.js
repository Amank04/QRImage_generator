import qr from "qr-image";
import fs from "fs";
// const readline = require('readline');
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter URL: ', (userInput) => {
//   console.log('User input:', userInput);
  var qr_svg = qr.image(userInput, { ec_level: 'L', type: 'png' });
  qr_svg.pipe(fs.createWriteStream('QR.png'));
  rl.close();
});

 
  

