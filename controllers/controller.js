const Model = require('../models/model.js')

class Controller {
    static showLandingPage(req, res) {
        try {
            res.send('ini landing page')
        } catch (error) {
            res.send(error)
        }
    }
    static async getAuthors(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async getAuthorsDetail(req, res) {
        try {

        } catch (error) {
            
        }
    }
    static async getPosts(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async getPostsAdd(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async uploadPostsAdd(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async getPostsId(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async getPostsIdEdit(req, res) {
        try {
        } catch (error) {
            
        }
    }
    static async changePostIdEdit(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
    static async getPostsIdDelete(req, res) {
        try {

        } catch (error) {
            
        }
    }
    static async getPostsVote(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = Controller