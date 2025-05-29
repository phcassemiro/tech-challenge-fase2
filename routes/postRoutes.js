import express from  "express";
import postController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/posts", postController.listarPosts); //Lista de posts disponíveis(Aluno)
routes.get("/posts", postController.listarPosts); //Lista de *todos* posts(Professor)
routes.get("/posts/:id", postController.listarPostPorId); //Leitura de posts
routes.post("/posts",postController.cadastrarPost);//Criação de postagem
routes.put("/posts/:id",postController.atualizarPost);//Edição de postagem
routes.delete("/posts/:id",postController.excluirPost);//Exclusão de postagem

export default routes;