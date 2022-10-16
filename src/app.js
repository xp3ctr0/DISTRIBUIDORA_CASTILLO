import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/language.routes";

const app = express();

app.set("port",4000);

app.use(morgan("dev"));
app.use("/api/languages",languageRoutes);
app.use("/api/juego",languageRoutes);

export default app;