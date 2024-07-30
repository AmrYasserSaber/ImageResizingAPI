import supertest from 'supertest';
import app from '../main';

it('should return 404 as the parameters are wrong', async () => {
    const wrong = 'A wrong parameter';
    await supertest(app).get(`/api/images/${wrong}`).expect(404);
});

it('should return 200 with a right parameter', async () => {
    const right = `?photo=fjord&&width=500&&height=700`;
    await supertest(app).get(`/api/images/${right}`).expect(200);
});

it('should return 400 with a large height', async () => {
    const right = `?photo=fjord&&width=500&&height=7000`;
    await supertest(app).get(`/api/images/${right}`).expect(400);
});

it('should return 400 with a large width', async () => {
    const right = `?photo=fjord&&width=5000&&height=700`;
    await supertest(app).get(`/api/images/${right}`).expect(400);
});
