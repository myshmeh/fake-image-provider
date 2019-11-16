var expess = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = expess();

const fakeImage = fs.readFileSync('fake-image.jpg');
const fakeImage64 = fakeImage.toString('base64');

app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.post("/", function (req, res) {
    var name = req.body.name;
    var img = req.body.image;

    console.log(`received ${name}!`);

    var realFile = Buffer.from(img, "base64");
    fs.writeFile(name, realFile, function (err) {
        if (err) console.log(err);
    });

    const name2send = 'fake_image.jpg';
    const image2send64 = fakeImage64;

    res.json({
        name: name2send,
        image: image2send64
    });
});

app.listen(3000, () => console.log('app is up and running!'));