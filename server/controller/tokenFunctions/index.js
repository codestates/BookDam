const jwt = require('jsonwebtoken');

module.exports = {
  isAuthorized: (cookie) => {
    const token = jwt.verify(cookie, process.env.ACCESS_SECRET);
    return token;
  }
};
