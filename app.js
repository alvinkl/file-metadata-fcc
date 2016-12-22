const express = require('express')
const multer = require('multer')
const path = require('path');
const app = express();
const upload = multer({});

const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/get-file-size', upload.single('file'), (req,res) => {
    res.json({size:req.file.size});
});

app.listen(port, function () {
  console.log('App running on port # ' + port);
});
