var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/save-user', userController.saveUser)
router.get('/get-user/:user_id', userController.getUser)
router.post('/save-user-info', userController.saveUserInfo)
router.post('/add-user-role-permission', userController.addUserRole)
router.get('/get-user-role-permission/:user_id', userController.getUserRolePermisssion)
module.exports = router;
