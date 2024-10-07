// create web server
// create a server that listens on port 3000
// create an array of objects where each object will have an id (number) and a message (string)
// create a route that sends the array of objects as a response
// create a route that sends a single object with the id specified in the route parameter as a response
// create a route that adds a new object to the array of objects
// create a route that deletes an object from the array of objects
// create a route that updates the message of an object in the array of objects

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [
  {
    id: 1,
    message: 'first comment'
  },
  {
    id: 2,
    message: 'second comment'
  },
  {
    id: 3,
    message: 'third comment'
  }
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
    return;
  }
  res.send(comment);
});

app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    message: req.body.message
  };
  comments.push(comment);
  res.send(comment);
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
    return;
  }
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
    return;
  }
  comment.message = req.body.message;
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});