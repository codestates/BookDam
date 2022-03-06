const app = require('../app');
const request = require('supertest');
const models = require('../models');
const should = require('should');
const { User: UserModel, Article: ArticleModel, Follow: FollowModel } = require('../models');
const jwt = require('jsonwebtoken');

describe('POST /follow/:user_Id', () => {
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
    const user = {
        id: 1,
        userId: 'guest'
    };
    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '1d' });
    describe('성공 시', () => {
        it('응답 상태 코드는 200을 반환한다.', (done) => {
            request(app)
            .post('/follow/1?follow_Id=2')
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
            .post('/follow/one')
            .expect(400, done);
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
            .post('/follow/1?follow_Id=2')
            .expect(401, done);
        });
        it('입력된 user_Id와 follow_Id가 같을 경우 400을 반환한다.', (done) => {
            request(app)
            .post('/follow/1?follow_Id=1')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(400)
                res.body.should.have.property('message', '본인을 팔로우할 수 없습니다.');
                done();
            });
        });
        it('쿼리로 follow_Id를 전달하지 않을 경우 400을 반환한다.', (done) => {
            request(app)
            .post('/follow/1')
            .set('Cookie', `jwt=${accessToken}`)
            .expect(400, done);
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
            .post('/follow/3?follow_Id=2')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(403)
                res.body.should.have.property('message', '본인만 팔로우를 요청할 수 있습니다.');
                done();
            });
        });
        it('쿼리로 follow_Id를 전달한 사용자가 존재하지 않을 경우 400을 반환한다.', (done) => {
            request(app)
            .post('/follow/1?follow_Id=5')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(400)
                res.body.should.have.property('message', '존재하지 않는 유저입니다.');
                done();
            });
        });
        it('이미 팔로우되어 있는 사용자의 경우 400을 반환한다.', (done) => {
            request(app)
            .post('/follow/1?follow_Id=2')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(400)
                res.body.should.have.property('message', '이미 팔로우되어 있는 유저입니다.');
                done();
            });
        });
    });
});

describe('DELETE /follow/:user_Id', () => {
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
            .delete('/follow/1?follow_Id=2')
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
            .delete('/follow/one')
            .expect(400, done);
        });
        it('요청에 쿠키가 없을 경우 401을 반환한다.', (done) => {
            request(app)
            .delete('/follow/1?follow_Id=2')
            .expect(401, done);
        });
        it('입력된 user_Id와 follow_Id가 같을 경우 400을 반환한다.', (done) => {
            request(app)
            .delete('/follow/1?follow_Id=1')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(400)
                res.body.should.have.property('message', '본인 팔로우를 취소할 수 없습니다.');
                done();
            });
        });
        it('쿼리로 follow_Id를 전달하지 않을 경우 400을 반환한다.', (done) => {
            request(app)
            .delete('/follow/1')
            .set('Cookie', `jwt=${accessToken}`)
            .expect(400, done);
        });
        it('입력된 id와 쿠키의 id가 다를 경우 403을 반환한다.', (done) => {
            request(app)
            .delete('/follow/3?follow_Id=2')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(403)
                res.body.should.have.property('message', '본인만 팔로우를 취소할 수 있습니다.');
                done();
            });
        });
        it('쿼리로 follow_Id를 전달한 사용자가 팔로우되어 있지 않을 경우 400을 반환한다.', (done) => {
            request(app)
            .delete('/follow/1?follow_Id=5')
            .set('Cookie', `jwt=${accessToken}`)
            .end((err, res) => {
                res.status.should.equal(404)
                res.body.should.have.property('message', '팔로우되어 있는 유저가 아닙니다.');
                done();
            });
        });
    });
});