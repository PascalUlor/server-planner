const request = require('supertest');
const app = require('../app');
const mock = require('../mock/data');

describe('Default Route', () => {
  test('[GET] / for valid endpoints works', async (done) => {
    const res = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(res.body).toEqual({
      status: 200,
      message: 'Hello from your Backend Engineer! I love coding.',
    });
    done();
  });
  test('[GET] / Fails if endpoint is invalid', (done) => request(app)
    .get('/wrong')
    .expect(404)
    .end(done));
});

describe('Test endpoints /api/v1', () => {
    test('[POST]/ to create an sort virtualMachines', async (done) =>{
        const res = await request(app)
        .post('/api/v1/calculate')
        .set('Content-Type', 'application/json')
        .send(mock.sampleInput);
        expect(res.status).toBe(200);
        expect(res.body.result).toEqual(2)
        done();
    });
});