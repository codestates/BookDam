const ttbkey = process.env.ttbkey;
const parser = require('xml2js').parseString;
const axios = require('axios')

module.exports = {
  get: (req, res) => {
    // const api_url = `https://openapi.naver.com/v1/search/book_adv.xml?d_titl=${encodeURI(req.query.query)}&display=${20}`;
    // const api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURI(req.query.query)}`;
    const api_url = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${ttbkey}&Query=${encodeURI(req.query.query)}&QueryType=Title&SearchTarget=Book&Sort=Title&Cover=Big&Output=XML`
    
    axios.get(api_url)
    .then((result) => { 
      parser(result.data, function (err, data) {
        res.send(data.object.item)
      })
      // res.send(result.data)
  })
    .catch((error) => {
      res.status(400).json({message : 'failure', error : error})
    })
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
  }
};
