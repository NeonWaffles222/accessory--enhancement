const express = require('express');
const morgan = require('morgan');

const PORT = 3001;

const app = express();

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
