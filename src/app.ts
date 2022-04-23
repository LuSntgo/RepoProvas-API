import "./setup.js";
import cors from "cors";
import express, { json } from "express";
import "express-async-errors";


const app = express();
app.use(json());
app.use(cors());


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
