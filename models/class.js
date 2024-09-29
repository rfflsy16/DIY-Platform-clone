class Author {
    constructor(id, fullName, gender) {
        this.id = id
        this.fullName = fullName
        this.gender = gender
    }
}

class AuthorId extends Author{
    constructor(id, fullName, gender, totalPost, totalVote, averageTime) {
        super(id, fullName, gender)
        this.totalPost = totalPost
        this.totalVote = totalVote
        this.averageTime = averageTime
    }
}

class Post {
    constructor(id, title, difficulty, totalVote) {
        this.id = id
        this.title = title
        this.difficulty = difficulty
        this.totalVote = totalVote
    }
}

class PostDetail extends Post {
    constructor(id, title, difficulty, totalVote, estimatedTime, description, imageUrl, createdDate, AuthorId, authorName) {
        super(id, title, difficulty, totalVote)
        this.estimatedTime = estimatedTime
        this.description = description
        this.imageUrl = imageUrl
        this.createdDate = createdDate
        this.AuthorId = AuthorId
        this.authorName = authorName
    }
}

class Factory{
    static getAuthor(id, fullName, gender) {
        return new Author(id, fullName, gender)
    }

    static getAuthorId(id, fullName, gender, totalPost, totalVote, averageTime) {
        return new AuthorId(id, fullName, gender, totalPost, totalVote, averageTime)
    }

    static getPost(id, title, difficulty, totalVote) {
        return new Post(id, title, difficulty, totalVote)
    }

    static getPostDetail(id, title, difficulty, totalVote, estimatedTime, description, imageUrl, createdDate, AuthorId, authorName) {
        return new PostDetail(id, title, difficulty, totalVote, estimatedTime, description, imageUrl, createdDate, AuthorId, authorName)
    }

}

module.exports = Factory;