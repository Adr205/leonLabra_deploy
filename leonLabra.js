const path = require("path");
const express = require("express");
const app = express();

// Serve static files
app.use(express.static(__dirname + "/dist/irv-ang"));

// Send all requests to index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/irv-ang/index.html"));
});

// app.get('*', (req, res) => {
//   res.sendFile('./index.html');
// });

// default Heroku port
app.listen(process.env.PORT || 3006);

