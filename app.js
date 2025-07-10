import express from "express"
import conectaNaDatabase from "./src/config/dbConfig.js";
import routes from "./src/routes/route.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro)=>{
    console.error("Erro de conexão: ", erro);
});

conexao.once("open", ()=> {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express();
routes(app)


export default app;