const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./router/index');
const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://bookdam.link',
      'https://www.bookdam.link'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH']
  })
);

app.use('/', (req, res) => {
  console.log('welecome bookdam')
})
// app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
