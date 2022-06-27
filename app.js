const { ok } = require('assert');
const express = require('express');
const app = express();
var fs = require("fs");

app.get('/random-img', function(req, res, err) {
    fs.readFile('./img-urls.csv', function(err, data) {
        var url = data.toString().split(/[\n\r]/);
        var random = Math.floor(Math.random() * url.length);
        if(req.query.json == "true") {
            res.json({
                id: random,
                url: url[random]
            });
        }
        else{
            res.redirect(302, url[random]);
        }
    })
})

var server = app.listen(4000, '127.0.0.1', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server running at http://%s:%s", host, port);
})