const express = require("express");
const app = express();
const port = 3000; //variável ambiente
const path = require("path");
const basePath = path.join(__dirname);
const checkAuth = function (req, res, next) {
  req.authStatus = true;
  if (req.authStatus) {
    console.log("Logado");
  } else {
    console.log("Não Logado");
  }
};
app.use(checkAuth);
app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
