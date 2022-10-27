import {Router} from "express";
import {methods as clientController} from "../controllers/client.controller";

const router = Router();

router.get("/", clientController.getClients);
router.get("/:id", clientController.getClients);
router.post("/", clientController.insertClients);
router.put("/", clientController.updateClients);

export default router;