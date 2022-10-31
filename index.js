// TODO: revert (all the) commit(s) related to this file / creation of this file!

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 200,
    message: 'Hit!',
  });
});

const port = 8080;

app.listen(port, () => console.log(`Server running on port ${port}...`));
