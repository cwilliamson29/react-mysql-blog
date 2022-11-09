import {} from "dotenv/config";
import express from "express";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser);

app.use("/api", routes);

app.listen(4000, () => {
    console.log("Connected to backend");
});
