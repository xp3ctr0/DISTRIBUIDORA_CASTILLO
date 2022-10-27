import {Router} from "express";
import {methods as userController} from "../controllers/user.controller";

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUsers);
router.post("/", userController.insertUser);
router.put("/", userController.updateUser);

export default router;