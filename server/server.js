const nr = require('newrelic')
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})
