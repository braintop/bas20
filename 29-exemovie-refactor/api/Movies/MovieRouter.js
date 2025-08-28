const express = require('express')
var router = express.Router();
var controller = require('./MovieController')
const { authenticateToken } = require('../User/authMiddleware');

// הגנת טוקן לכל הפונקציות
router.get('/', authenticateToken, controller.get);
router.post('/', authenticateToken, controller.create);
router.get('/:id', authenticateToken, controller.getById);
router.patch('/:id', authenticateToken, controller.update);
router.delete('/:id', authenticateToken, controller.delete);

module.exports = router;