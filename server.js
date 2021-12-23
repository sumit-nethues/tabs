import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import tabRouter from "./src/routers/tabRouter.js";

// config .env file
dotenv.config();
// init app
const app = express();

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.SERVER_DB_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("mongoDb conneected and server started at ", PORT)
    );
  })
  .catch(() => console.log("error in connecting to databse"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

//routing middleware
app.use("/tabs", tabRouter);

app.get("*", (_, res) => {
  res.redirect("/");
});

app.use((_, res) => {
  res.status(404).send("404 page found");
});
