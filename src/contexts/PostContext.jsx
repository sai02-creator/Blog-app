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


    return <PostContext.Provider value={{ posts, setPosts }}> {props.children} </PostContext.Provider>
}

export default PostProvider;