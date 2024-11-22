import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//MongoDB Connection
try {
  mongoose.connect(URI);
  console.log("MongoDB Conncetion Successful");
} catch (error) {
  console.log("Error ", error);
}

app.use(express.json());
app.use(cors());
//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
