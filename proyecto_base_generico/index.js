

const express = require("express");
const app = express();
app.set("view engine", "ejs");








app.get("/home", (req, res) => {
  
  res.render(home);
});







app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});