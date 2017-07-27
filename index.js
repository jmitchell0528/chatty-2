var express = require("express");
var bodyParser = require("body-parser");

var port = 3000;

var messages = [
  {
    id: 1,
    message: "Hello, hello!"
  },
  {
    id: 2,
    message: "I'm Batman!"
  },
  {
    id: 3,
    message: "I love tacos!"
  }
];

var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());

app.get('/messages', function (req, res, next)  {
  res.status(200).json({ messages: messages});
});

app.post('/messages', function (req, res, next) {
  messages.push({message: req.body.message, time: new Date()  });
  res.status(201).json({messages: messages});
});

app.listen(port, function() {
  console.log('listening on port 3000')
})
