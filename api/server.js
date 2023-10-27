const express = require('express');
const morgan = require('morgan');

const PORT = 3001;

const app = express();

const items = require('./routes/items');

app.use(morgan('dev'));

app.use('/api/items', items);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
