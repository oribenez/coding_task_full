import express from "express";
import userController from "../controllers/users";
var router = express.Router();

/* GET users listing. */
router.get("/", userController.getUsers);

module.exports = router;
export default router;
