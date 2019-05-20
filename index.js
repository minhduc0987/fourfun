const express = require('express');

const app = express();
const port = 8080;
app.get('/home', function (req, res) {
    res.send("Hello" + req.query.username);
});
app.post('/home', function (req, res) {
    res.send("Hello" + req.query.username);
});
app.get('/', function (req, res) {
    res.send('Hello World!')
});
app.listen(8080, function () {
   console.log("aaa");
});