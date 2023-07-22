import express from "express";
import { addNewUsers } from "../models/index.js";

export const router = express.Router()

router.post("/", async function (req, res) {
    const createUser = await addNewUsers (req.body)
    res.status(201).json({
        succes: true,
        payload: createUser
    })
})