const pool = require('../config/connnection.js')
const {readFile} = require('fs').promises

async function seedData() {
    try {
        const authorsData = JSON.parse(await readFile('./data/authors.json', 'utf-8')); //authors
        // console.log(authorsData)
        const datas = authorsData.map(el => {
            return `('${el.fullName}', '${el.gender}')`
        }).join(',\n')
        
        let seedAuthors = `INSERT INTO "Authors" ("fullName", "gender")
        VALUES ${datas}`
        // console.log(seedAuthors)
        
        const postsData = JSON.parse(await readFile('./data/posts.json', 'utf-8')); // posts
        // console.log(postsData)
        const data = postsData.map(el => {
            return `('${el.title}', '${el.difficulty}', '${el.estimatedTime}', '${el.description}', '${el.totalVote}', '${el.imageUrl}', '${el.createdDate}', '${el.AuthorId}')`
        }).join(', \n')
        // console.log(data)
        // console.log(data)
        let seedPosts = `INSERT INTO "Posts" ("title", "difficulty", "estimatedTime", "description", "totalVote", "imageUrl", "createdDate", "AuthorId") VALUES ${data}`
        // console.log(seedPosts)
        
        await pool.query(seedAuthors)
        console.log("SUKSES SEEDAUTHOR")
        await pool.query(seedPosts)
        console.log("SUKSES SEEDPOSTS")
    } catch (error) {
        console.log(error)
    }
}

seedData()