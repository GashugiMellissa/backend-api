import app from "./app";
import dotenv from "dotenv";

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });