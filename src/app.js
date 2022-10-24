import express from "express";
import morgan from "morgan";
import clientRoutes from "./routes/client.routes";

const app = express();


app.set("port",4000);
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/languages",clientRoutes);
app.use("/api/clients",clientRoutes);

export default app;