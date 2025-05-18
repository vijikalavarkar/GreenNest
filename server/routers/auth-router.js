const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');
const validate = require('../middlewares/validate-middleware');
const { userRegisterSchema, userLoginSchema } = require('../validators/auth-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const emailMiddleware = require('../middlewares/emailMiddleware');

router.route('/').get(authController.home);
router.route('/register').post(validate(userRegisterSchema), authController.register);
router.route('/login').post(validate(userLoginSchema), authController.login);
router.route('/service').get(authController.service);
router.route('/about').get(authController.about);
router.route('/contact').post(authController.contact);
router.route('/getauth').get(authController.getauth);
router.route('/user').get(authMiddleware, authController.user);

// email verification contents
router.route('/sendverifyotp').post(emailMiddleware, authController.sendverifyotp);
router.route('/verifyemail').post(emailMiddleware, authController.verifyemail);

module.exports = router;