const express = require('express')
const app = express()
const port = 3010
const Controller = require('./controllers/controller.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', Controller.showLandingPage)
app.get('/authors', Controller.getAuthors)
app.get('/authors/detail', Controller.getAuthorsDetail)
app.get('/posts', Controller.getPosts)
app.get('/posts/add', Controller.getPostsAdd)
app.post('/posts/add', Controller.uploadPostsAdd)
app.get('/posts/:id', Controller.getPostsId)
app.get('/posts/:id/edit', Controller.getPostsIdEdit)
app.post('/posts/:id/edit', Controller.changePostIdEdit)
app.get('/posts/:id/delete', Controller.getPostsIdDelete)
app.get('/posts/:id/vote', Controller.getPostsVote)

app.listen(port, () => {
    console.log(`Chuaksssssss`, port)
})

