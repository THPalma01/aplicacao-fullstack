import express from "express";
import agendaRoutes from "./routes/agendas.js";
import cors from "cors";

const app = express();  //Para utilizar o modo json para alterações como
                        // Post e Put
app.use(express.json());
app.use(cors());

app.use("/", agendaRoutes);

app.listen(8800);      //Escutar a porta 8800