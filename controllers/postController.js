import { post } from "../models/postModel.js";

class PostController {

    static async listarPosts (req,res){

        try {
            const listaPosts = await post.find({});
            res.status(200).json(listaPosts);
        } catch (error) {

            res.status(500).json({message: `${error.message} - falha na requisição`})

        }

    };

    static async listarPostPorId (req,res,next){

        try {
            const id = req.params.id;
            const postEncontrado = await post.findById(id);
            if(postEncontrado !== null){

                res.status(200).json(autorEncontrado);
            }else{
                res.status(404).json({message: 'Id do post não localizado'})
            }
        } catch (error) {

            next(error);
        }

    };

    static async cadastrarPost(req,res, next){
        try {

            const novoPost = await post.create(req.body);
            res.status(201).json({ message: "Post criado com sucesso", post: novoPost });

        } catch (error) {
            next(error);
        }
    }

    static async atualizarPost (req,res, next){

        try {
            const id = req.params.id;
            await post.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Post atualizado"});
        } catch (error) {

            next(error);

        }

    };

    static async excluirPost (req,res, next){

        try {
            const id = req.params.id;
            await post.findByIdAndDelete(id);
            res.status(200).json({message: "Post excluido"});
        } catch (error) {

            next(error);

        }

    };


}

export default PostController;