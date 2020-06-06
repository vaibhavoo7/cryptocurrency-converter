const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const app=express();

app.listen(3000,function () {
  console.log("server is running perfectly at port 3000");
});

app.use(bodyparser.urlencoded({extended:true}));
app.get("/", function (req,res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function (req,res) {
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  //console.log(req.body.crypto);
  var baseurl='https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD';
  //var finalurl=baseurl+crypto+fiat;







  request(finalurl, function (err,res,body) {
    var data=JSON.parse(body);
    var price =data.last;
    //var currentdate=data.display_timestamp;
    console.log(price);
    //res.write("the current time is "+display_timestamp);
    //res.write("the current price of"+crypto+"is"+price);
  //  res.send();
  });

});
