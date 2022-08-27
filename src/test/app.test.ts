import request from 'supertest';
import app from '../app';

describe('App test', () => {
  it('should start the application', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Welcome to the API');
  });
});
