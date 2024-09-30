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
            const author = await Model.getAuthors()
            res.render('author', { author })
        } catch (error) {
            res.send(error)
        }
    }
    static async getAuthorsDetail(req, res) {
        try {

        } catch (error) {
            res.send(error)
        }
    }
    static async getPosts(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsAdd(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async uploadPostsAdd(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsId(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsIdEdit(req, res) {
        try {
        } catch (error) {
            res.send(error)
        }
    }
    static async changePostIdEdit(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsIdDelete(req, res) {
        try {

        } catch (error) {
            res.send(error)
        }
    }
    static async getPostsVote(req, res) {
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller