var express = require('express');
var app = express();

var obj = {"IP Adress" : null};

app.get("/", function(req,res) {
    obj["IP Adress"] = req.header('x-forwarded-for') || req.connection.remoteAddress;
    res.send(obj);
});

app.set("port",process.env.PORT || 5000);

app.listen(app.get("port"), function() {
    console.log("Running ... " )
});
