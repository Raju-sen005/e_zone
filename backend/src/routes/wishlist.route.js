const express = require('express');
const router = express.Router();
const { getWishlist, addToWishlist, removeFromWishlist } = require('../controllers/wishlist.controller');
const { isAuth } = require('../middlewares/auth.middleware');

router.get('/', isAuth, getWishlist);
router.post('/add', isAuth, addToWishlist);
router.delete('/remove/:productId', isAuth, removeFromWishlist);

module.exports = router;