class Author {
    constructor(id, fullName, gender) {
        this.id = id
        this.fullName = fullName
        this.gender = gender
    }
}

class AuthorId extends Author{
    constructor() {

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
    constructor() {
        
    }
}