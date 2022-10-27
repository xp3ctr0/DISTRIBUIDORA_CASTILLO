import express from "express";
import morgan from "morgan";
import clientRoutes from "./routes/client.routes";
import userRoutes from "./routes/user.routes";

const app = express();


app.set("port",4000);
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/clients",clientRoutes);
app.use("/api/users",userRoutes);

export default app;