import express from "express";
import cors from "cors";
import { createUserTable } from "./db/functions.js";
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors("*"));
app.use("/users", router)

const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`Server is listening to port ${PORT}.`);
  });
  
  export default app;