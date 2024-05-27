// Create web server using Flask
// Run server using Python

// Import the necessary modules
var express = require('express');
var app = express();
var fs = require('fs');

// Read the JSON file
var comments = fs.readFileSync('comments.json');

// Convert the JSON file to a JavaScript object
var commentsObj = JSON.parse(comments);

// Create the route
app.get('/comments', function(req, res) {
  res.send(commentsObj);
});

// Start the server
app.listen(3000, function() {
  console.log('Server running on port 3000');
});

// Run the Python server
// python -m SimpleHTTPServer 3001
// Open the browser and go to http://localhost:3001
// Open the console and type the following command:
// fetch('http://localhost:3000/comments').then(response => response.json()).then(data => console.log(data));