const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => console.log('Test server on port 3000'));
