// Imports
import express from "express";
import { logReq, globalErr } from "./middleware/middleware.js";
import seedRoutes from "./routes/seedRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // how long open period
  limit: 40,
  message: "Too many requests, please try again later",
});

// Middleware
app.use(
  cors({
    origin: ["https://capstone-frontend-aei1.onrender.com", "http://localhost:5173"],
    credentials: true, // Allow the req.header AND req.body through. w/o would only allow the req.body
  }),
); // Allows sharing resources to all Servers

app.use(limiter);
app.use(express.json());
app.use(logReq);
app.use(cors());

// Routes
app.use("/api/seed", seedRoutes);
app.use("/api/movies", movieRoutes);


// Global middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});