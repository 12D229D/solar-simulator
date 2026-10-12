import request from 'supertest';
import express from 'express';
import planetsRouter from '../routes/planets';

const app = express();
app.use('/api', planetsRouter);

describe('GET /api/planets', () => {
  it('should return an array of planets', async () => {
    const response = await request(app).get('/api/planets');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // al menos debería haber 9 cuerpos (Sol + 8 planetas)
    expect(response.body.length).toBeGreaterThanOrEqual(9);
  });
});
