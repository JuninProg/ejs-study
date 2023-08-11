const express = require('express');
const path = require('path');

const router = require('./Router');
const Database = require('./infra/Database');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.resolve('public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports.listen = async (port) => {
  await Database.connect();

  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`EJS-STUDY running on http://localhost:${port}`);
      resolve();
    });
  });
};
