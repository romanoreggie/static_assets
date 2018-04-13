const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/helloworld', (request, response) => {
  response.send('hello');
});

app.listen(3000, () => {
    console.log("I am listening");
});
