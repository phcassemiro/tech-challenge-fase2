import { post } from "../models/postModel.js";

class PostController {

    static async listarPostPorFiltro(req,res, next){

        try {
            const { titulo, descricao } = req.query;
            const busca = {};

            if(titulo) busca.titulo = { $regex: titulo, $options: "i" };
            if(descricao) busca.descricao = { $regex: descricao, $options: "i" };

            const postsResultado = await post.find(busca);
            res.status(200).json(postsResultado);

        } catch (error) {

            next(error);

        }
    };

    static async listarPosts(req, res) {
    try {
        const listaPosts = await post.find({});

        const postsFormatados = listaPosts.map(post => {
            const postObj = post.toObject();
            postObj.dataCriacao = post.dataCriacao.toLocaleDateString("pt-BR");
            postObj.dataAtualizacao = post.dataAtualizacao.toLocaleDateString("pt-BR");
            return postObj;
        });

        res.status(200).json(postsFormatados);
    } catch (error) {

        next(error);
    }
    };

    static async listarPostPorId (req,res,next){

        try {
            const id = req.params.id;
            const postEncontrado = await post.findById(id);
            if(postEncontrado !== null){

                res.status(200).json(postEncontrado);
            }else{
                res.status(404).json({message: 'Id do post não localizado'})
            }
        } catch (error) {

            next(error);
        }

    };

    static async cadastrarPost(req,res, next){
        try {

            if(req.body.dataAtualizacao || req.body.dataCriacao){

                res.status(500).json({message: "Não é permitido enviar datas"});
            }else{
                const novoPost = await post.create(req.body);
                res.status(201).json({ message: "Post criado com sucesso", post: novoPost });
            }



        } catch (error) {
            next(error);
        }
    }

    static async atualizarPost (req,res, next){

        try {
            if(req.body.dataAtualizacao || req.body.dataCriacao){
                res.status(500).json({message: "Não é permitido alterar datas"});
            }else{
                const id = req.params.id;
                await post.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Post atualizado"});
            }
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