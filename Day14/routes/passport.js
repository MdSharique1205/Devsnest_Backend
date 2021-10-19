const router = require("express").Router();
// Bring the user registeration function
const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
} = require("../utils/Auth");

// User registeration route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// Admin registeration route

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// Super Admin registeration route

router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});

//User Login Route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});
router.post("/login-superadmin", async (req, res) => {
  await userLogin(req.body, "user", res);
});

router.post("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

router.get(userAuth, checkRole(["user"]), async (req, res) => {
  return res.json("Hello User");
});

router.get(userAuth, checkRole(["admin"]), async (req, res) => {
  return res.json("Hello Admin");
});
