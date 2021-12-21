import express from "express";
import mongoose from "mongoose";

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
