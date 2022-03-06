const app = require('../app');
const request = require('supertest');
const models = require('../models');
const should = require('should');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');
const articleTestData = [
  {
    id: '1',
    user_Id: '2',
    book_Title: '가재가 노래하는 곳',
    book_Author: '델리아 오언스 지음, 김선형 옮김',
    book_Thumbnail: 'https://image.aladin.co.kr/product/19469/77/cover/s762635820_1.jpg',
    book_Publisher: '살림',
    sentence: '카야는 숨을 쉬는 촉촉한 흙에 가만히 손을 대었다. 그러자 습지가 카야의 어머니가 되었다',
    comment: '모든 것을 맞춰주시는 어머니의 품 안이었기에 카야는 원하는 것을 얻을 수 있지 않았을까..',
    createdAt: '2022-1-19',
    updatedAt: new Date()
  },
  {
    id: '2',
    user_Id: '1',
    book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
    book_Author: '이미예 지음',
    book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
    book_Publisher: '팩토리나인',
    sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
    comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
    createdAt: '2022-1-19',
    updatedAt: new Date()
  }
]

describe('POST /user/login', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'sangkwon',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .post('/user/login')
        .send({ userInfo: { userId: 'guest', password: '1234' } })
        .expect(200, done);
    });
    it('성공 메세지를 반환한다.', (done) => {
      request(app)
        .post('/user/login')
        .send({ userInfo: { userId: 'guest', password: '1234' } })
        .end((err, res) => {
          res.body.should.have.property('message', 'success');
          res.body.should.have.property('userInfo');
          done();
        });
    });
    it('응답에 쿠키를 담아 전송합니다.', (done) => {
      request(app)
        .post('/user/login')
        .send({ userInfo: { userId: 'guest', password: '1234' } })
        .end((err, res) => {
          res.headers['set-cookie'][0].split(';')[0].split('=')[0].should.equal('jwt');
          done();
        });
    });
  });
  describe('실패 시', () => {
    it('회원가입을 하지 않은 유저일 경우 404를 전송한다.', (done) => {
      request(app)
        .post('/user/login')
        .send({ userInfo: { userId: 'sangkwon', password: '1234' } })
        .expect(404, done);
    });
    it('유저 정보가 정확하지 않을 경우 400을 리턴한다.', (done) => {
      request(app)
        .post('/user/login')
        .send({ userInfo: { userId: 'guest'} })
        .expect(400, done);
    });
  });
});
describe('POST /user/logout', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'sangkwon',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  describe('성공 시', () => {
    const user = {
      id: 1,
      userId: 'guest'
    };
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .post('/user/logout')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(200, done);
    });
    it('성공 메세지를 반환한다.', (done) => {
      request(app)
      .post('/user/logout')
      .set('Cookie', `jwt=${accessToken}`)
        .end((err, res) => {
          res.body.should.have.property('message', '로그아웃 되었습니다.');
          done();
        });
    });
  });
  describe('실패 시', () => {
    it('요청 쿠키에 jwt가 없을 경우에 401을 반환한다.', (done) => {
      request(app)
        .post('/user/logout')
        .expect(401, done);
    });
  });
});

describe('POST /user/signup', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 2,
    userId: 'Bookdam',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'Bookdam',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  describe('성공 시', () => {
    it('응답 상태 코드는 201을 반환한다.', (done) => {
      request(app)
        .post('/user/signup')
        .send({ userInfo : {
          userId: 'guest',
          password: '1234',
          userNickName: 'guest',
        }})
        .expect(201, done);
    });
    it('성공 메세지와 유저의 정보를 반환한다.', (done) => {
      request(app)
      .post('/user/signup')
      .send({ userInfo : {
        userId: 'sangkwon',
        password: '1234',
        userNickName: 'sangkwon',
      }})
      .end((err, res) => {
        res.body.should.have.property('message', 'success');
        res.body.should.have.property('userInfo');
        res.body.userInfo.should.have.property('userId');
        res.body.userInfo.should.have.property('userNickName');
        res.body.userInfo.should.have.property('userImage');
        done()
      })
    });
  });
  describe('실패 시', () => {
      let body;
      it('회원정보가 부족하면 400을 리턴한다.', (done) => {
        request(app)
        .post('/user/signup')
        .send({ userInfo : {
          userId: 'David',
          userNickName: 'Daniel',
        }})
        .expect(400, done);
      });
      it('중복된 아이디일 경우 400을 리턴한다.', (done) => {
        request(app)
          .post('/user/signup')
          .send({ userInfo : {
            userId: 'sangkwon',
            password: '1234',
            userNickName: 'sangkwon',
          }})
          .expect(400, done)
      })
  });
});

describe('DELETE /user/:id', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 1,
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'guest',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id : 2,
    userId: 'sangkwon',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'sangkwon',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      const user = {
        id: 1,
        userId: 'guest'
      };
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      request(app)
        .delete('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(200, done)
    });
    it('응답 메세지를 반환한다.', (done) => {
      const user = {
        id: 2,
        userId: 'sangkwon'
      };
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      request(app)
        .delete('/user/2')
        .set('Cookie', `jwt=${accessToken}`)
        .end((err, res) => {
          res.body.should.have.property('message', '유저가 탈퇴되었습니다.');
          done()
        })
    });
  });
  describe('실패 시', () => {
    it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
      request(app)
        .delete('/user/one')
        .expect(400, done)
    });
    it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
      request(app)
        .delete('/user/1')
        .expect(401, done)
    });
    it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
      const user = {
        id: 1,
        userId: 'guest'
      };
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      request(app)
        .delete('/user/3')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', '본인만 탈퇴를 요청할 수 있습니다.');
          done()
        })
    });
  });
});

describe('GET /user/:id', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 1,
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'guest',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id : 2,
    userId: 'sangkwon',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'sangkwon',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  before(() => ArticleModel.queryInterface.bulkInsert('Articles', articleTestData));
  const user = {
    id: 2,
    userId: 'sangkwon'
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .get('/user/2')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(200, done)
    });
    it('본인의 정보 요청 시 유저 정보, 팔로우 정보, 아티클 정보를 반환한다.', (done) => {
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      request(app)
        .get('/user/2')
        .set('Cookie', `jwt=${accessToken}`)
        .end((err, res) => {
          res.body.should.have.property('message', 'success');
          res.body.userInfo.should.have.property('id', 2);
          res.body.follow.should.have.property('following', 0);
          res.body.articleData.should.have.property('count', 1);
          done()
        })
    });
    it('다른 사용자의 정보 요청 시 유저 정보, 팔로우 정보, 아티클 정보, 팔로우 여부를 반환한다.', (done) => {
      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
      request(app)
        .get('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .end((err, res) => {
          res.body.should.have.property('message', 'success');
          res.body.userInfo.should.have.property('id', 1);
          res.body.should.have.property('follow');
          res.body.should.have.property('articleData');
          res.body.should.have.property('isfollow', 0);
          done()
        })
    });
  });
  describe('실패 시', () => {
    it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
      request(app)
        .get('/user/one')
        .expect(400, done)
    });
    it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
      request(app)
        .get('/user/1')
        .expect(401, done)
    });
    it('존재하지 않는 사용자에 대한 요청일 경우 404를 반환한다.', (done) => {
      request(app)
        .get('/user/5')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(404)
        .end((err, res) => {
          res.body.should.have.property('message', '사용자 정보를 찾을 수 없습니다.');
          done();
        })
    });
  });
});

describe('PATCH /user/:id', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 1,
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'guest',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  const user = {
    id: 1,
    userId: 'guest'
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .patch('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : {
          userNickName: 'kim',
          password : '9876'
        }})
        .expect(200, done)
    });
    it('응답에 수정된 유저의 정보가 포함되어 있어야 한다.', (done) => {
      request(app)
        .patch('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : {
          userNickName: 'bookdam',
          password : '4567'
        }})
        .expect(200)
        .end((err, res) => {
          res.body.should.have.property('userInfo');
          done();
        })
    });
    it('비밀번호나 닉네임 둘 중 하나라도 있으면 변경되어야 한다.', (done) => {
      request(app)
        .patch('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : {
          userNickName: 'sangkwon',
        }})
        .expect(200, done)
        })
    });
  describe('실패 시', () => {
    it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
      request(app)
        .patch('/user/one')
        .expect(400, done)
    });
    it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
      request(app)
        .patch('/user/1')
        .expect(401, done)
    });
    it('요청에 변경할 사용자의 정보가 없다면 400을 반환한다.', (done) => {
      request(app)
        .patch('/user/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send()
        .expect(400)
        .end((err, res) => {
          res.body.should.have.property('message', '수정할 정보를 정확하게 입력해주세요.');
          done();
        })
    });
    it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
      request(app)
        .patch('/user/3')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', '본인만 회원정보를 수정할 수 있습니다.');
          done()
        })
    });
  });
});

describe('GET /user', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 1,
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'guest',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id : 2,
    userId: 'sangkwon',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'backendDeveloper',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  const user = {
    id: 1,
    userId: 'guest'
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .get('/user?name=sangkwon')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(200, done)
    });
    it('userId나 userNickName의 일부만 작성해도 검색 결과를 반환한다.', (done) => {
      request(app)
        .get('/user?name=back')
        .set('Cookie', `jwt=${accessToken}`)
        .expect(200)
        .end((err, res) => {
          res.body.searchInfo[0].should.have.property('userNickName', 'backendDeveloper');
          done();
        })
    });
  });
  describe('실패 시', () => {
    it('쿼리로 name을 전달하지 않을 경우 400을 반환한다.', (done) => {
      request(app)
        .get('/user')
        .expect(400, done)
    });
    it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
      request(app)
        .get('/user?name=sang')
        .expect(401, done)
    });
  });
});

describe('POST /user/validation/:user_Id', () => {
  before(() => models.sequelize.sync({ force: true }));
  before(() => UserModel.queryInterface.bulkInsert('Users', [{
    id : 1,
    userId: 'guest',
    password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
    userNickName: 'guest',
    userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
    createdAt: new Date(),
    updatedAt: new Date()
  }]));
  const user = {
    id: 1,
    userId: 'guest'
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
  describe('성공 시', () => {
    it('응답 상태 코드는 200을 반환한다.', (done) => {
      request(app)
        .post('/user/validation/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : { 
          password : '1234'
        }})
        .expect(200, done)
    });
    it('응답 메세지를 반환한다.', (done) => {
      request(app)
        .post('/user/validation/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : { 
          password : '1234'
        }})
        .expect(200)
        .end((err, res) => {
          res.body.should.have.property('message', '비밀번호가 맞습니다.')
          done();
        })
    });
  });
  describe('실패 시', () => {
    it('요청에 password가 없을 경우 400을 반환한다.', (done) => {
      request(app)
        .post('/user/validation/1')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : {}})
        .expect(400, done)
    });
    it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
      request(app)
        .post('/user/validation/one')
        .send({ userInfo : { password : '1234'}})
        .expect(400, done)
    });
    it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
      request(app)
        .post('/user/validation/1')
        .send({ userInfo : { password : '1234'}})
        .expect(401, done)
    });
    it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
      request(app)
        .post('/user/validation/3')
        .set('Cookie', `jwt=${accessToken}`)
        .send({ userInfo : { password : '1234'}})
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', '본인만 비밀번호를 확인할 수 있습니다.');
          done()
        })
    });
  });
});