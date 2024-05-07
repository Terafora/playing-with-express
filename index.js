const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
    console.log("A new request received at " + Date.now());
    res.send("Hello, we got your request! This is the response!");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});