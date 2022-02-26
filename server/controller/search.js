const ttbkey = process.env.ttbkey;
const parser = require('xml2js').parseString;
const axios = require('axios');

module.exports = {
  get: (req, res) => {
    const api_url = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${ttbkey}&Query=${encodeURI(req.query.query)}&QueryType=Keyword&SearchTarget=Book&Sort=accuracy&Cover=Big&Output=XML`;
    axios.get(api_url)
      .then((result) => {
        parser(result.data, function (err, data) {
          if (data.object.totalResults[0] === '0') {
            return res.status(400).send({ message: '찾는 결과가 없습니다.' });
          } else if (err) {
            return res.status(400).send({ message: 'failure' });
          } else {
            return res.status(200).send(data.object.item);
          }
        });
      })
      .catch(() => {
        res.status(400).json({ message: `${req.query.query}책 검색에 실패했습니다.` });
      });
  }
};
