var express = require("express");
var app = express();


function getLanguage(lng){
    var str = lng.split(",");
    return str[0].toString();
}

function getSoftware(hdrs){
    var str = hdrs.split(") ");
    var str2 = str[0].split(" (");
    return str2[1].toString();
}

app.get('/', function(req,res){
    var obj = {"ipaddress":req.headers['x-forwarded-for'].toString(),"language":getLanguage(req.headers['accept-language']),"software":getSoftware(req.headers['user-agent'])};
    
    console.log( obj );
    res.send( obj );
});

app.listen(8080,function(){
    console.log('Listening on port 8080');
});
