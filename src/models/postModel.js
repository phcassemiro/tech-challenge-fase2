import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        titulo: {type: String, required: [true, "O título do post é obrigatório"]},
        descricao : {type: String, required: [true, "A descrição do post é obrigatório"]},
        autor: {type: String , required: [true, "O autor do post é obrigatório"] }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'dataCriacao', updatedAt: 'dataAtualizacao' }
    }
);

const post = mongoose.model("posts", postSchema);

export {post, postSchema};