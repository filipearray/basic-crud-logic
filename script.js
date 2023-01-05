const database = {
    users: [
        {
            username: "filipearray",
        }
    ],
    posts: [
        {
            id: 1,
            owner: "filipearray",
            content: "Please, watch Monster."
        }
    ],
};

// CREATE

function createPost(data) {
    database.posts.push({
        id: database.posts.length + 1,
        owner: data.owner,
        content: data.content
    });
}

createPost({ owner: "filipearray", content: "Please, watch Kaiji." }); 
createPost({ owner: "filipearray", content: "Please, watch Ping Pong The Animation." }); 

// READ

function getPosts() {
    return database.posts;
}
console.log(getPosts())

// UPDATE

function updatePostContent(id, newContent) {
    const postToBeUpdated = getPosts().find((post) => {
        return post.id === id;
    });
  
    postToBeUpdated.content = newContent
}
updatePostContent(1, "Please, watch Hunter x Hunter.")

// DELETE

function deletePost(id) {
    const updatedPostList = getPosts().filter((currentPost) => {
        return currentPost.id !== id;
    })
    
    database.posts = updatedPostList;
}

deletePost(3); // 1, 2, 4 filtered

console.log(getPosts());

// a
