import { useState, useEffect } from "react";
import Post from "./Post.js";
import PostForm from "./PostForm";

function PostContainer({ user, urlTopic, setOtherUserProfile}) {
    
    const [postArray, setPostArray] = useState([]);
    
    useEffect(() => {
        fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => {
            setPostArray(posts.filter(post => (post.topic.id === urlTopic.id)))
        })
    }, []);

    const post = postArray.map((post) => {
        return (
            <Post
                post={post}
                user={user}
                id={post.id}
                key={post.id}
                content={post.content}
                username={post.user.username}
                avatar={post.user.profile_picture}
                createdDate={post.created_date}
                updatedDate={post.updated_date}
                createdAt={post.created_at}
                updatedAt={post.updated_at}
                postArray={postArray}
                setPostArray={setPostArray}
                urlTopic={urlTopic}
                setOtherUserProfile={setOtherUserProfile}
            />
        );
    });


    return (
        <>
            <div className="posts">{post}</div>
            <PostForm user={user} urlTopic={urlTopic} setPostArray={setPostArray} />
        </>
    );
}

export default PostContainer;
