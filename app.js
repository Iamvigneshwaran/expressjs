// var express = require('express');
// fs = require('fs')
// var app= express();
// var bodyparser = require('body-parser')
// var urlencoder =bodyparser.urlencoded({extended:false})

// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/"+"index.html");
// })

// // app.get('/home',function(req,res){
// //     res.send("<h1>welcome "+req.query['username']+'</h1><br><h2> mail id :'+req.query['emailid']+"<h2>");
// // })

// //post 
// app.post('/home',urlencoder,function(req,res){
//     res.send( "<h1>welcome "+req.body.username+'</h1><br><h2> mail id :'+req.body.emailid+"<h2>");



// }) 


// app.listen(8080);



const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const urlEncoder = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/home', urlEncoder, (req, res) => {
  const response = {
    uname: req.body.username,
    email: req.body.emailid,
  };
  fs.appendFile('text.txt', JSON.stringify(response), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
        // JSON.parse(response);
     res.send(`<h1>Welcome ${response.uname}</h1><br><h2>Mail id: ${response.email}</h2>`);
    }
  });
});

app.listen(8080);



