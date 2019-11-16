const fs = require('fs');

const image = fs.readFileSync('./scaled_9c37bbee-8fe4-40e9-82a5-85917def22a31830842522911359867.jpg');
const imageBase64 = image.toString('base64');
const image_ = Buffer.from(imageBase64, 'base64');

console.log(image);
console.log(imageBase64);
console.log(image_);

fs.writeFile('image.jpg', image_, function (err) {
    if (err) console.log(err);
});