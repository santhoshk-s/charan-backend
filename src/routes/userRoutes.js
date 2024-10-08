const {
  register,
  login,
  setAvatar,
  getAllUsers,
  logOut,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
 
module.exports = router;
