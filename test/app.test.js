const request = require('supertest');
const app = require('../app'); // ou '../index' dependendo do seu projeto

describe('Testando rota principal', () => {
  it('deve responder com status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
