const express = require('express');
const router = express.Router();
const { deleteUser, getAllUsers, getUser, updateUser } = require('../controllers/user.controller');

// ✅ GET all users
router.route('/').get(getAllUsers);

// ✅ GET single user by ID (View)
router.route('/:id').get(getUser);

// ✅ PUT (Edit) a user by ID
router.route('/:id').put(updateUser);

// ✅ DELETE a user by ID
router.route('/:id').delete(deleteUser);

module.exports = router;
