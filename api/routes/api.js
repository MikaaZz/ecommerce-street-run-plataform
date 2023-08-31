const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/users').get(userController.getAllUsers).post(userController.createUser);

module.exports = router;
