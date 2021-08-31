const router = require('express').Router();
const UserController = require('../controllers/user');

router.post('/createUser', UserController.createUser);
router.post('/login', UserController.login);
router.get('/listUser/:name?', UserController.listUser);
router.put('/updateUser', UserController.updateUser);
router.put('/deleteUser', UserController.deleteUser);

module.exports = router;