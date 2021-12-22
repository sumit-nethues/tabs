import express from "express";
import mongoose from "mongoose";

import tabRouter from "./src/routers/tabRouter.js";

const app = express();

const serverDbUrl =
  "mongodb+srv://sumiBoi:sumi1234@cluster0.llcwi.mongodb.net/Learning?retryWrites=true&w=majority";

mongoose
  .connect(serverDbUrl)
  .then(() => {
    app.listen("3001", () =>
      console.log("mongoDb conneected and server started at 3001")
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
