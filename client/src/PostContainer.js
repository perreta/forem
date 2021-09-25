import { useState, useEffect } from "react";
import Post from "./Post.js";
import PostForm from "./PostForm";

function PostContainer({ user, topic }) {
    const [postArray, setPostArray] = useState([]);
    useEffect(() => {
        fetch("/posts")
        .then((resp) => resp.json())
        .then((posts) => {
            setPostArray(posts.filter(post => (post.topic.id === topic.id)))
        })
    }, []);

    const post = postArray.map((post) => {
        return (
            <>
                {user ? (
                    <Post
                        post={post}
                        user={user}
                        key={post.id}
                        id={post.id}
                        content={post.content}
                        username={post.user.username}
                        avatar={post.user.profile_picture}
                        createdDate={post.created_date}
                        updatedDate={post.updated_date}
                        createdAt={post.created_at}
                        updatedAt={post.updated_at}
                        postArray={postArray}
                        setPostArray={setPostArray}
                    />
                ) : null}
            </>
        );
    });


    return (
        <>
            <div className="posts">{post}</div>
            <PostForm user={user} setPostArray={setPostArray} />
        </>
    );
}

export default PostContainer;
