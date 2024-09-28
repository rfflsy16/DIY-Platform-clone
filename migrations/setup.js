const pool = require('../config/connnection.js')

async function setupTable() {
    try {
        let drop =`DROP TABLE IF EXISTS "Posts", "Authors";`
        let createAuthors = `CREATE TABLE IF NOT EXISTS "Authors" (
        "id" SERIAL PRIMARY KEY,
        "fullName" VARCHAR(120) NOT NULL,
        "gender" VARCHAR(6) NOT NULL
    );`
        let createPosts = `CREATE TABLE IF NOT EXISTS "Posts" (
        "id" SERIAL PRIMARY KEY,
        "title" VARCHAR(100) NOT NULL, 
        "difficulty" VARCHAR(6) NOT NULL, 
        "estimatedTime" INTEGER NOT NULL, 
        "description" TEXT NOT NULL, 
        "totalVote"INTEGER NOT NULL, 
        "imageUrl" VARCHAR(100) NOT NULL, 
        "createdDate" DATE NOT NULL,
        "AuthorId" INTEGER NOT NULL REFERENCES "Authors" ("id")
    ); `
    
    await pool.query(drop);
    console.log("sukses drop")
    await pool.query(createAuthors)
    console.log("sukses createAuthors")
    
    await pool.query(createPosts)
    console.log("sukses createPosts")
    } catch (error) {
        console.log(error)
    }

}

setupTable()