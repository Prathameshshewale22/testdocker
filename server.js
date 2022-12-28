const express=require("express");
var app=express();

app.get("/",function(req,res){
    // res.send("<h1>hello</h1>")
     res.sendFile("hello.html",{root:__dirname});

});

app.listen(4500);
console.log("server start on 4500");
