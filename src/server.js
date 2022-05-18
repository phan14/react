import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routers/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view
configViewEngine(app);

// init web routeer
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> jwt backend is runing =" + PORT);
});
