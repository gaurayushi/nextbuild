// routes/user.routes.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { checkUsername, createUser } = require("../controllers/user.controller");

router.get("/check-username", checkUsername);
router.post("/create", upload.single("profilePhoto"), createUser);

module.exports = router;
