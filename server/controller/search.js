const ttbkey = process.env.ttbkey;
const parser = require('xml2js').parseString;
const axios = require('axios');

module.exports = {
  get: (req, res) => {
    const api_url = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${ttbkey}&Query=${encodeURI(req.query.query)}&QueryType=Keyword&SearchTarget=Book&Sort=accuracy&Cover=Big&Output=XML`;
    axios.get(api_url)
      .then((result) => {
      // if(result.status === 200) {
        parser(result.data, function (err, data) {
          if (data.object.totalResults[0] === '0') {
            return res.status(400).send({ message: '찾는 결과가 없습니다.' });
          } else if (err) {
            return res.status(400).send({ message: 'failure' });
          } else {
            return res.status(200).send(data.object.item);
          }
        });
        // }
      })
      .catch((error) => {
        res.status(400).json({ message: `${req.query.query}책 검색에 실패했습니다.` });
      });
  }
};

// const api_url = `https://openapi.naver.com/v1/search/book_adv.xml?d_titl=${encodeURI(req.query.query)}&display=${20}`;
// const api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(req.query.query)}`;
// const options = {
//   url: api_url,
//   headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
// };
// request.get(options, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     parser(body, function (err, result) {
//       if (!err) {
//         if (result.rss.channel[0].display[0] === '0') {
//           res.status(400).json({ message: '제목을 더 자세하게 적어주세요.' });
//         }
//         res.status(200).send(result.rss.channel[0].item);
//       } else {
//         res.status(401).json({ message: 'failure' });
//       }
//     });
//   } else {
//     res.status(response.statusCode).end();
//     console.log('error = ' + response.statusCode);
//   }
// });
