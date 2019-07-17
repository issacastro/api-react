import { Router } from "express";
import { createUser,getUser,updateUser,getUsers,deleteUser } from "../controllers/UserController";
const router = Router();
router.route("/")
.get(getUsers)
.post(createUser);

router.route("/:id")
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
