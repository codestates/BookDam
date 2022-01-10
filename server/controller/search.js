const request = require('request');
const client_id = process.env.Client_ID;
const client_secret = process.env.Client_Secret;
const parser = require('xml2js').parseString;

module.exports = {
  get: (req, res) => {
    const api_url = `https://openapi.naver.com/v1/search/book_adv.xml?d_titl=${encodeURI(req.query.query)}&display=${20}`;
    // const api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(req.query.query)}`;
    const options = {
      url: api_url,
      headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        parser(body, function (err, result) {
          if (!err) {
            if (result.rss.channel[0].display[0] === '0') {
              res.status(400).json({ message: '제목을 더 자세하게 적어주세요.' });
            }
            res.status(200).send(result.rss.channel[0].item);
          } else {
            res.status(401).json({ message: 'failure' });
          }
        });
      } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
      }
    });
  }
};

// https://search.pstatic.net/sunny/?src=http://img4.tmon.kr/cdn4/deals/2021/09/14/8513323990/front_ec22f_nwo5t.jpg&type=b150

// API 주소 : http://book.interpark.com/api/xmlrpc
