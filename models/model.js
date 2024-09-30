const Factory = require('./class.js')
const pool = require('../config/connnection.js')

class Model {
    static showLandingPage() {
        try {
            
        } catch (error) {
            throw error
        }
    }
    static async getAuthors() {
        try {
            const data = `
            SELECT * FROM "Authors"
            `

            let result = await pool.query(data)
            // console.log(result.rows)
            result = result.rows.map(el => {
                return Factory.getAuthor(el.id, el.fullName, el.gender)
            })

            return result
            
        } catch (error) {
            throw error
        }
    }
    static async getAuthorsDetail() {
        try {
            const data = `
            SELECT
                a."id",
                a."fullName",
                a."gender",
                CAST(COUNT(p."id") AS FLOAT) AS "totalPost",
                CAST(SUM(p."totalVote") AS FLOAT) AS "totalVote",
                CAST(AVG(p."estimatedTime") AS FLOAT) AS "averageTime"
            FROM "Authors" a
            INNER JOIN "Posts" p
            ON a."id" = p."AuthorId"
            GROUP BY a."id"
            ORDER BY a."id" ASC
            `

            let result = await pool.query(data)
            // console.log(result.rows)

            result = result.rows.map(el => {
                return Factory.getAuthorId(el.id, el.fullName, el.gender, el.totalPost, el.totalVote, el.averageTime)
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async getPosts() {
        try {
            const data = `SELECT * FROM "Posts"`

            let result = await pool.query(data)
            // console.log(result.rows)

            result = result.rows.map(el => {
                return Factory.getPost(el.id, el.title, el.difficulty, el.totalVote)
            })

            return result
        } catch (error) {
            throw error
        }
    }
    static async getPostsAdd() {
        try {
            
        } catch (error) {
            throw error
        }
    }
    static async uploadPostsAdd() {
        try {
            const data = `
            INSERT INTO "Posts" ("title", "difficulty", "estimatedTime", "description", "totalVote", "imageUrl", "createdDate", "AuthorId")
            VALUES (')
            `
        } catch (error) {
            throw error
        }
    }
    static async getPostsId(id) {
        try {
            const data = `
            SELECT 
                p.*,
                a."fullName"
            FROM "Posts" p
            INNER JOIN "Authors" a
            ON p."AuthorId" = a."id"
            WHERE p."id" = ${id}
            `

            let result = await pool.query(data)
            // console.log(result.rows)
            result = result.rows.map(el => {
                return Factory.getPostDetail(el.id, el.title, el.difficulty, el.totalVote, el.estimatedTime, el.description, el.imageUrl, el.createdDate, el.AuthorId, el.fullName)
            })

            return result[0]
        } catch (error) {
            throw error
        }
    }
    static async getPostsIdEdit() {
        try {
        } catch (error) {
            throw error
        }
    }
    static async changePostIdEdit() {
        try {
            
        } catch (error) {
            throw error
        }
    }
    static async getPostsIdDelete(id) {
        try {
            const data = `
            DELETE FROM "Posts"
            WHERE "id" = ${id}
            `

            await pool.query(data)
            return `Berhasil menghapus post`
        } catch (error) {
            throw error
        }
    }
    static async getPostsVote() {
        try {
            
        } catch (error) {
            throw error
        }
    }
}

async function test() {
    try {
        // console.log(await Model.getAuthors())
        // console.log(await Model.getAuthorsDetail())
        // console.log(await Model.getPosts())
        // console.log(await Model.getPostsId(8))
        // console.log(await Model.getPostsIdDelete(8))
        
    } catch (error) {
        console.log(error)
    }
}

test()
module.exports = Model