import express from "express";
import autores from "./postRoutes.js";

const routes = (app) => {
    app.route("./").get((req,res)=> res.status(200).send("API DE POSTS!"))

    app.use(express.json(), livros, autores)
};

export default routes;