import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import deserializeUser from "./middleware/deserializeUser";
import routes from "./route";
require("dotenv").config();

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(deserializeUser);

app.use(
  cors({
    credentials: true, // allow cookie accept by server
    origin: "http://localhost:3001",
  })
);

function main() {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });
  routes(app);
}

main();
