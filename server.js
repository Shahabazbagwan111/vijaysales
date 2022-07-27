
var express=require('express');
var app=express();

app.get("/",(req,res)=>{

    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Smart devices for sale</h3>"
            +"<br/>"
            +"<li>Laptops</li>"
            +"<li>Mobile Phones</li>"
            +"<li>Holographic devices</li>"
            +"<li>Smart watches</li>"
            +"<li>Gaming Consoles</li>"
            +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{

    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            +"<br/>"
            +"<li>Chief Mentor:Shahabaz Bagwan</li>"
            +"<li>Director:Shubham nalawade</li>"
            +"<li>Subject matter Expert: Onkar jadhav</li>"
            +"</ol>"
    );
});

app.get("/login",(req,res)=>{

    res.send(
            "<h1>Vijay Sales </h1>"
            +"<h3>Login</h3>"
            +"<form>"
            +"<input/>"
            +"<br/>"
            +"</input>"
            +"<button>login</button>"
            +"</form>"
    );
});

var server=app.listen(9000);
console.log("Vijay sales online shopping running on port 9000");