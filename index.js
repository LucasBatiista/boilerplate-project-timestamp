// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", (req, res) => {
  
  const date_format = /\b\d{4}-\d{2}-\d{2}\b/g;
  if (req.params.date.match(date_format)) {
    date = new Date(req.params.date);
  } else {
    date = new Date(Number(req.params.date));
  }
  res.json({unix: date.getTime(), utc: date.toUTCString()});
})

app.get("/api", (req, res) => {
  timestamp = new Date();
  res.json({unix: timestamp.getTime(), utc: timestamp.toUTCString()});
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
