import config from "./config/config";
import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();
app.use(
    cors({
        origin: config.website_domain,
        credentials: true,
        methods: ["GET", "POST", "PUT", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);
app.use(express.json());
app.use("/api/blogs", blogRoutes);
app.use(errorHandler);

export default app;
