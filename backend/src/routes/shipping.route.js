const express = require('express');
const router = express.Router();
const { getShipping, saveShipping } = require('../controllers/shipping.controller');
const {isAuth} = require('../middlewares/auth.middleware');

router.get('/', isAuth, getShipping);
router.post('/add', isAuth, saveShipping);

module.exports = router;