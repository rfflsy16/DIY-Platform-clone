const Model = require('../models/model.js')

class Controller {
    static showLandingPage(req, res) {
        try {
            res.render('index')
        } catch (error) {
            res.send(error)
        }
    }
    static async getAuthors(req, res) {
        try {
            const authors = await Model.getAuthors()
            res.render('authors', { authors })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async getAuthorsDetail(req, res) {
        try {
            let authorsDetail = await Model.getAuthorsDetail()
            res.render('authorsDetail', { authorsDetail })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async getPosts(req, res) {
        try {
            const posts = await Model.getPosts()
            res.render('posts', { posts })
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsAdd(req, res) {
        try {
            const authors = await Model.getAuthors()
            res.render('addPosts', { authors })
        } catch (error) {
            res.send(error)
        }
    }
    static async uploadPostsAdd(req, res) {
        try {
            const { title, difficulty, estimatedTime, description, imageUrl, createdDate, AuthorId } = req.body
            await Model.uploadPostsAdd(title, difficulty, estimatedTime, description, imageUrl, createdDate, AuthorId )
            res.redirect('/posts')
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsId(req, res) {
        try {
            const posts = await Model.getPostsId(req.params.id)
            res.render('postsId', { posts })
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsIdEdit(req, res) {
        try {
            const authors = await Model.getAuthors()
            const posts = await Model.getPostsId(req.params.id)
            res.render('editPost', { authors, posts})
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async changePostIdEdit(req, res) {
        try {
            const  { title, difficulty, estimatedTime, description, imageUrl, createdDate, AuthorId } = req.body
            await Model.changePostIdEdit(title, difficulty, estimatedTime, description, imageUrl, createdDate, AuthorId, req.params.id)
            res.redirect('/posts')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async getPostsIdDelete(req, res) {
        try {
            await Model.getPostsIdDelete(req.params.id)
            res.redirect('/posts')
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsVote(req, res) {
        try {
            await Model.getPostsVote(req.params.id)
            res.redirect(`/posts/${req.params.id}`)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller