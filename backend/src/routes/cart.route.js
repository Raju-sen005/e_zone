const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cart.controller');
const {isAuth} = require('../middlewares/auth.middleware'); // Auth middleware

router.get('/', isAuth, getCart);
router.post('/add', isAuth, addToCart);
router.delete('/remove/:itemId', isAuth, removeFromCart);

module.exports = router;
