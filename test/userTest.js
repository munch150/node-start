const chai = require('chai');
const chaiHttp = require('chai-http');
//const server = 'http://127.0.0.1:3002';
const {server} = require('../index')
//Assertion style - should
chai.should();
chai.use(chaiHttp);

describe('user Api', ()=>{
    it('returns user details for passing user id', (done)=>{
        chai.request(server)
            .get('/users/get-user/1')
            .end((err, res)=> {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('email');
                done();                               
            });
            
    } );

    it('save new user', (done)=>{
        chai.request(server)
            .post('/users/save-user')
            .send({ 
            "firstName": "Manju",
            "lastName": "HT",
            "email": "maunchtest@gmail.com"
        })
            .end((err, res)=> {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('email');
                done();                               
            });
            
    } );


    it('save user information', (done)=>{
        chai.request(server)
            .post('/users/save-user-info')
            .send({
                "userId":1,
                "country":"india",
                "state":"karnataka",
                "city":"Bangalore",
                "gender":"Male"
            })
            .end((err, res)=> {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('userId');
                done();                               
            });
            
    } );

});

