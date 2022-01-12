module.exports = {
  post: (req, res, next) => {
    const Img = req.file;
    console.log(Img);
    // console.log(req)
    // console.log('s3 이미지 경로 :',Img.location);
  }
};
