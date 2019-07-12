const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        res.send(posts);
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        if(image) {
            const post = await Post.create({
                author,
                place,
                description,
                hashtags,
                image
            });
            
            res.send(post);
        } else {
            res.status(400).send('É necessário enviar uma imagem');
        }
    }
}
