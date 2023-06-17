import express from "express";
import "dotenv/config";
import "./config/db_connexion.js";

import blockchainRoutes from "./routes/blockchain.route.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

// ROUTES
app.use("/api/blockchain", blockchainRoutes);

// SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
