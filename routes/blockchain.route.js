import express from "express";

import { getEthBalance, isValidAddress } from "../controllers/blockchain.controller.js";

const router = express.Router();

// CONTROLLERS
router.post("/isValidAddress", isValidAddress);
router.post("/getBalance", getEthBalance);

export default router;
