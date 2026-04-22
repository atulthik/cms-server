import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./config/db.js";
import postRoutes from "./routes/post.routes.js";

dotenv.config();

const app = express();

connectdb();

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);

app.get("/",(req,res) => {
    res.send("API Running....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});
