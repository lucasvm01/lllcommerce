import "reflect-metadata";
import express from "express";
import "express-async-errors";
import "../typeorm";
import routes from "./routes/index.routes";
import ErrorHandler from "./middleware/ErrorHandler";

const app = express();

app.use (express.json());

app.use(routes);

app.use(ErrorHandler);

app.listen(3333, () => {
    console.log("Server OK");
});