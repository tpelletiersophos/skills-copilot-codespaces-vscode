// Create web server
const express = require('express');
const app = express();

// Create a path for comments
app.get('/comments', (req, res) => {
  res.send('Comments path');
});

// Create a path for comments with id
app.get('/comments/:id', (req, res) => {
  res.send('Comments path with id');
});

// Create a path for comments with id and author
app.get('/comments/:id/:author', (req, res) => {
  res.send('Comments path with id and author');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});