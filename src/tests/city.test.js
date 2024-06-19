const request = require('supertest')
const app = require('../app')

const city = {
  name: "Bogota",
  country: "Colombia",
  isCapital: true
}

const BASE_URL = '/api/v1/cities'

test("Post -> '/cities', should return status code 201 and res.body.name === city.name", async () => {

  const res = await request(app)
    .post(BASE_URL)
    .send(city)

  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
  // expect(res.body.name).toBe('Bogota')

})