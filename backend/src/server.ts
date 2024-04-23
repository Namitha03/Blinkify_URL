import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConfig";
import cors from "cors";
import shorturl from "./routes/shorturl";
dotenv.config();

const port = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/", shorturl);

app.listen(port, () => {
  console.log(`Server Running on the port: ${port}`);
});

connectDb();
