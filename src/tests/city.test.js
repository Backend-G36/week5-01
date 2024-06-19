const request = require('supertest')
const app = require('../app')


let cityId

const city = {
  name: "Bogota",
  country: "Colombia",
  isCapital: true
}

const BASE_URL = '/api/v1/cities'

test("Post -> 'BASE_URL', should return status code 201 and res.body.name === city.name", async () => {

  const res = await request(app)
    .post(BASE_URL)
    .send(city)

  cityId = res.body.id

  expect(res.status).toBe(201)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
  // expect(res.body.name).toBe('Bogota')
})

test("Get -> 'BASE_URL', should return status code 200 and res.body to have length = 1", async () => {
  const res = await request(app)
    .get(BASE_URL)

  // console.log(res.body);
  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  // expect(res.body.length).toBe(1)
  expect(res.body).toHaveLength(1)
})

test("Get -> 'BASE_URL/:id', should return status code 200, res.body.name === city.name", async () => {
  const res = await request(app)
    .get(`${BASE_URL}/${cityId}`) //! /api/v1/cities/1

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(city.name)
})

test("Put -> 'BASE_URL/:id', should return status code 200, res.body.name === cityUpdate.name ", async () => {
  const cityUpdate = {
    name: "barranquilla",
    isCapital: false
  }

  const res = await request(app)
    .put(`${BASE_URL}/${cityId}`)
    .send(cityUpdate)

  expect(res.statusCode).toBe(200)
  expect(res.body).toBeDefined()
  expect(res.body.name).toBe(cityUpdate.name)
  expect(res.body.isCapital).toBe(cityUpdate.isCapital)
})


test("Delete -> 'BASE_URL/:id', should return status code 204 ", async () => {
  const res = await request(app)
    .delete(`${BASE_URL}/${cityId}`)

  expect(res.status).toBe(204)
})