const express = require('express');
const router = express.Router();
const {
  celebrate,
  Joi,
  errors
} = require('celebrate');
const ProductController = require('./controller/product_controller');

// this function validates if res.body has a name and the price of the product is greater than one

router.get('/', (req, res, next) => {
  return next(new HttpError(404, 'Page not found'));
  res.send('welcome');
});

router.get('/products', (req, res) => {
  res.send('this is the products page')
});

router.post('/products', celebrate({
  body: {
    name: Joi.string().required(),
    price: Joi.number().min(0).integer(),
  },
}), ProductController.create);

router.use(errors());
module.exports = router;
iu3