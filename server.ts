import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middleware/error";

export const createServer = () => {
  config();
  const api = express();
  api.use(express.urlencoded({ extended: true }));
  api.use(express.json());

  api.use(morgan("dev"));
  api.use(cors());
  const port = process.env.PORT || 3000;

  api.get("/health", (req, res) => {
    res.json({
      ok: true,
      message: "Hello World!",
      version: "1.0.0",
      env: process.env.NODE_ENV,
    });
  });

  api.use(errorHandler);

  return api;
};
