var express = require('express');
var app = express();

var obj = {"IP Address" : null, "lang" : null, "OS" : null};

app.get("/", function(req,res) {
    obj["IP Address"] = req.header('x-forwarded-for') || req.connection.remoteAddress;
    obj["lang"] = req.headers["accept-language"].slice(0,2);
    obj["OS"] = req.headers['user-agent'];
    console.log(obj);
    res.send(obj);
});

app.set("port",process.env.PORT || 5000);

app.listen(app.get("port"), function() {
    console.log("Running ... " )
});
