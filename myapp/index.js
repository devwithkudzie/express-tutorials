const express = require('express');
const things = require('./things');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to TutorialPoint');
});
app.get('/about', (req, res) => {
  res.send('About TutorialPoint');
});
app.post('/hello', (req, res) => {
  res.send('You just called the post method at /hello endpoint');
});
app.all('/test', (req, res) => {
  res.send('HTTP method doesn\'t have any effect on this route!');
});
app.use('/things', things);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});