const express= require("express");
const fs = require("fs");
const { json } = require("stream/consumers");

const app = express();
const port= 3003;


app.use((req, res, next) => {
    const log = {
        timestamp: new Date(),
        ip: req.ip,
        url: req.url,
        protocol: req.protocol,
        method: req.method,
        hostname: req.hostname
    };

    const logstring= JSON.stringify(log) + '\n';

    fs.appendFile('log.txt', logstring, "utf-8", (err)=>{
        if (err){
            console.log("error in log ");
            
        }
    })
next();
});

app.get("/about/:name/:id",(req, res)=> {
res.send(`Hello! ${req.params.name}`);
console.log("req sent");

});

app.get("/", (req,res)=>{
    
    res.send("heyy, youre on home page");
    console.log("req sent on homes page");
})

app.listen(port, () => console.log("server has started"));