const router = require("express").Router();
const { body } = require("express-validator");
const { register } = require("../login controllers/registerController.js");
const { login } = require("../login controllers/loginController.js");
const {getUser} = require('../login controllers/getUserController_notused.js');
router.post(
  "/InviteUser",
  [
    body("Name", "The name must be of minimum 3 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 3 }),

    body("Username", "The name must be of minimum 3 characters length")
      .notEmpty()
      .escape()
      .trim()
      .isLength({ min: 3 }),

    body("Email", "Invalid email address").notEmpty().escape().trim().isEmail(),

    body("Password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  register
);

router.post(
  "/login",
  [
    body("Email", "Invalid Email address").notEmpty().escape().trim().isEmail(),
    body("Password", "The Password must be of minimum 4 characters length")
      .notEmpty()
      .trim()
      .isLength({ min: 4 }),
  ],
  login
);
router.get("/getUser", getUser);

module.exports = router;
