const express = require("express");
const app = express();
const port = 3000;

app.use(() => {
    console.log("A new request received at " + Date.now());
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});