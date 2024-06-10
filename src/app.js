import express from "express";
import routerSistema from "./router/routerProjeto.js";
import cors from "cors";
import routerUsuario from "./router/routerUsuario.js";

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use("/projeto", routerSistema);
app.use("/usuario", routerUsuario);

app.listen(port, () => {
  console.log(`Server : http://localhost:${port}/projeto `);
});
