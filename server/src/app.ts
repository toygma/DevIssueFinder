import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import issueRoutes from "./routes/issue.routes";
import path from "path";
const __dirname = path.resolve();
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

app.use("/api/v1", issueRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    const indexPath = path.resolve(__dirname, "../client/dist/index.html");
    res.sendFile(indexPath);
  });
}


app.listen(PORT, () => {
  console.log(`server is running PORT:${PORT}`);
});


export default app;
