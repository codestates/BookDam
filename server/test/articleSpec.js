const app = require('../app');
const request = require('supertest');
const models = require('../models');
const should = require('should');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');
const articleTestData = [
    {
        id: '1',
        user_Id: '1',
        book_Title: '가재가 노래하는 곳',
        book_Author: '델리아 오언스 지음, 김선형 옮김',
        book_Thumbnail: 'https://image.aladin.co.kr/product/19469/77/cover/s762635820_1.jpg',
        book_Publisher: '살림',
        sentence: '카야는 숨을 쉬는 촉촉한 흙에 가만히 손을 대었다. 그러자 습지가 카야의 어머니가 되었다',
        comment: '모든 것을 맞춰주시는 어머니의 품 안이었기에 카야는 원하는 것을 얻을 수 있지 않았을까..',
        createdAt: '2022-1-19',
        updatedAt: new Date()
    },{
        id: '2',
        user_Id: '2',
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
        comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
  }
];


describe('GET /ariticle/:user_Id', () => {
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
        userId: 'bookdam',
        password: '$2b$10$RJq0gXxBHhLsRhMtI8U3p./kk.KPvdohoMx179N3HvbUaDpPbMi1.',
        userNickName: 'bookdam',
        userImage: 'https://img.icons8.com/flat-round/512/000000/bird--v1.png',
        createdAt: new Date(),
        updatedAt: new Date()
    }]));
    before(() => ArticleModel.queryInterface.bulkInsert('Articles', articleTestData));
    before(() => FollowModel.queryInterface.bulkInsert('Follows', [{
        id: '1',
        user_Id: '1',
        follow_Id: '2',
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
                .get('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .expect(200, done)
        });
        it('사용자가 팔로우하는 사용자의 아티클을 반환한다.', (done) => {
            request(app)
                .get('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .expect(200)
                .end((err, res) => {
                    res.body.should.have.property('articleData')
                    done();
                })
        });
    });
    describe('실패 시', () => {
        it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
            request(app)
                .get('/article/one')
                .expect(400, done);
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
                .get('/article/1')
                .expect(401, done);
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
                .get('/article/3')
                .set('Cookie', `jwt=${accessToken}`)
                .end((err, res) => {
                    res.status.should.equal(403)
                    res.body.should.have.property('message', '본인의 피드 페이지만 접속할 수 있습니다.');
                done();
                });
        });
    });
});

describe('POST /ariticle/:user_Id', () => {
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
    const articleInfo = { articleInfo : {
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
        comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
    }}
    describe('성공 시', () => {
        it('응답 상태 코드는 200을 반환한다.', (done) => {
            request(app)
                .post('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .send(articleInfo)
                .expect(201, done);
        });
        it('성공 메세지와 아티클 정보를 반환한다.', (done) => {
            request(app)
                .post('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .send(articleInfo)
                .expect(200)
                .end((err, res) => {
                    res.body.should.have.property('message', 'success');
                    res.body.should.have.property('articleInfo');
                    done();
                })
        });
    });
    describe('실패 시', () => {
        it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
            request(app)
                .post('/article/one')
                .set('Cookie', `jwt=${accessToken}`)
                .expect(400, done)
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
                .post('/article/1')
                .send(articleInfo)
                .expect(401, done)
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
                .post('/article/3')
                .set('Cookie', `jwt=${accessToken}`)
                .send(articleInfo)
                .end((err, res) => {
                    res.status.should.equal(403)
                    res.body.should.have.property('message', '본인만 아티클을 작성할 수 있습니다.');
                done();
                });
        });
        it('아티클 정보가 부족하면 400을 리턴한다.', (done) => {
            request(app)
                .post('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .send({ articleInfo : {
                    book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
                    book_Author: '이미예 지음',
                    sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
                    comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
                }})
                .expect(400, done)
        });
    });
});

describe('PATCH /ariticle/:user_Id', () => {
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
    before(() => ArticleModel.queryInterface.bulkInsert('Articles', [{
        id: '1',
        user_Id: '1',
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
        comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
    }]));
    describe('성공 시', () => {
        it('응답 상태 코드 200과 아티클 정보를 반환한다.', (done) => {
            request(app)
                .patch('/article/1?article_Id=1')
                .set('Cookie', `jwt=${accessToken}`)
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .end((err, res) => {
                    res.status.should.equal(200)
                    res.body.should.have.property('message', 'success');
                    res.body.should.have.property('userInfo');
                done();
                });
        });
    });
    describe('실패 시', () => {
        it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
            request(app)
                .patch('/article/one')
                .set('Cookie', `jwt=${accessToken}`)
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .expect(400, done)
        });
        it('쿼리로 article_Id를 전달하지 않을 경우 400을 반환한다.', (done) => {
            request(app)
                .patch('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .expect(400, done)
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
                .patch('/article/1?article_Id=1')
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .expect(401, done)
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
                .patch('/article/3?article_Id=1')
                .set('Cookie', `jwt=${accessToken}`)
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .end((err, res) => {
                    res.status.should.equal(403)
                    res.body.should.have.property('message', '본인만 아티클을 수정할 수 있습니다.');
                done();
                });
        });
        it('쿼리로 입력된 article_Id가 존재하지 않을 경우 404를 반환한다.', (done) => {
            request(app)
                .patch('/article/1?article_Id=3')
                .set('Cookie', `jwt=${accessToken}`)
                .send({articleInfo : {
                    sentence: '지금은 수정 중입니다.',
                    comment: '지금은 수정 중입니다.',
                }})
                .end((err, res) => {
                    res.status.should.equal(404)
                    res.body.should.have.property('message', '해당 아티클을 찾을 수 없습니다.');
                done();
                });
        });
    });
});

describe('DELETE /ariticle/:user_Id', () => {
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
    before(() => ArticleModel.queryInterface.bulkInsert('Articles', [{
        id: '1',
        user_Id: '1',
        book_Title: '달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다',
        book_Author: '이미예 지음',
        book_Thumbnail: 'https://image.aladin.co.kr/product/24512/70/cover/k392630952_2.jpg',
        book_Publisher: '팩토리나인',
        sentence: '과거의 어렵고 힘든 일 뒤에는 그걸 이겨냈던 자신의 모습도 함께 존재한다는 사실.',
        comment: '힘든 시절의 꿈을 꿨을 때 불쾌함만 남았었는데, 이 문장으로 생각의 전환을 할 수 있었습니다.',
        createdAt: '2022-1-19',
        updatedAt: new Date()
    }]));
    describe('성공 시', () => {
        it('응답 상태 코드 200과 메세지를 반환한다.', (done) => {
            request(app)
                .delete('/article/1?article_Id=1')
                .set('Cookie', `jwt=${accessToken}`)
                .end((err, res) => {
                    res.status.should.equal(200)
                    res.body.should.have.property('message', 'success');
                done();
                });
        });
    });
    describe('실패 시', () => {
        it('정수가 아닌 id를 입력할 경우 400을 반환한다.', (done) => {
            request(app)
                .delete('/article/one')
                .set('Cookie', `jwt=${accessToken}`)
                .expect(400, done)
        });
        it('쿼리로 article_Id를 전달하지 않을 경우 400을 반환한다.', (done) => {
            request(app)
                .delete('/article/1')
                .set('Cookie', `jwt=${accessToken}`)
                .expect(400, done)
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
                .delete('/article/1?article_Id=1')
                .expect(401, done)
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
                .delete('/article/3?article_Id=1')
                .set('Cookie', `jwt=${accessToken}`)
                .end((err, res) => {
                    res.status.should.equal(403)
                    res.body.should.have.property('message', '본인만 아티클을 삭제할 수 있습니다.');
                done();
                });
        });
        it('쿼리로 입력된 article_Id가 존재하지 않을 경우 404를 반환한다.', (done) => {
            request(app)
                .delete('/article/1?article_Id=3')
                .set('Cookie', `jwt=${accessToken}`)
                .end((err, res) => {
                    res.status.should.equal(404)
                    res.body.should.have.property('message', '해당 아티클을 찾을 수 없습니다.');
                done();
                });
        });
    });
});