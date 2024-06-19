const { getAll, create, getOne, remove, update } = require('../controllers/city.controllers');
const express = require('express');

const routerCity = express.Router();

routerCity.route('/') //! /api/v1/cities 👌
  .get(getAll)
  .post(create);

routerCity.route('/:id') //! /api/v1/cities/4
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerCity;