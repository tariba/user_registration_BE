import express from "express";
import cors from "cors";

const app = express();

app.use(cors("*"));

const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`Server is listening to port ${PORT}.`);
  });
  
  export default app;