const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  );
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../public/')));
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}


app.listen(process.env.PORT || 8081);