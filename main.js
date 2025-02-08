const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, I am Nodejs in a Container" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});