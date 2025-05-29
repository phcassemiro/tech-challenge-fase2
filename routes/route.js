import express from "express";
import posts from "./postRoutes.js";

const routes = (app) => {
    app.route("./").get((req,res)=> res.status(200).send("API DE POSTS!"))

    app.use(express.json(),posts)
};

export default routes;