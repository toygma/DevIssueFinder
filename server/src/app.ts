import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import issueRoutes from "./routes/issue.routes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json({limit:"50mb"}));

app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.use("/", issueRoutes);


app.listen(PORT, () => {
  console.log(`server is running PORT:${PORT}`);
});


export default app;
