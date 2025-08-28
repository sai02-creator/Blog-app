import { createContext, useState } from "react";

export const PostContext = createContext();


function PostProvider(props) {
    const [posts, setPosts] = useState([
     {
        id:1,
        title:"Hello World",
        content: "Welcome to my new blog."
    },
    {
        id:2,
        title:"Second Post",
        content: "Sample content written here."
    }
]);

function addPost (newPost) {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, {...newPost, id: lastId + 1}]);

}
function findPostById(id) {
    return posts.find((post) => post.id === id);

}

function updatePost(updatedPost) {
    setPosts((prev) => prev.map((post) => (post.id === updatedPost.id ? updatedPost: post))
);

}
    return <PostContext.Provider value={{ posts, addPost, findPostById, updatePost }}> {props.children} </PostContext.Provider>
}

export default PostProvider;