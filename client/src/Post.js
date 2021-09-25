import { useState } from "react";
import defaultProfile from "./photos/icons8-name-64.png";
import { Form, Button, TextArea, Header, Image } from "semantic-ui-react";

function Post({ user, id, content, username, avatar, createdDate, updatedDate, createdAt, updatedAt, postArray, setPostArray}) {
  const [isClicked, setIsClicked] = useState(false);
  const [updatedText, setUpdatedText] = useState(content);

  
    function handleRemove() {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());
        const postsToDisplay = postArray.filter((post) => {
            console.log(post.id, id);
            if (post.id === id) return false;
            else return true;
        });
        setPostArray(postsToDisplay);
    }

    function handleEdit(e) {
        e.preventDefault();
        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: updatedText,
            }),
        })
        .then((res) => res.json())
        .then((updatedPost) => handleUpdatePost(updatedPost));
        setIsClicked(!isClicked);
    }
  
    function handleUpdatePost(updatedPost) {
        const updatedPostsArray = postArray.map((post) => {
            return post.id === updatedPost.id ? updatedPost : post;
        });
        setPostArray(updatedPostsArray);
    }

    function handleEditClick() {
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleInputChange(event) {
        setUpdatedText(event.target.value);
    }

    return (
        <>
            <div
                className="post"
                style={{
                    justifyContent: "center",
                    padding: 5,
                    border: "2px solid gray",
                }}
            >
                <Image
                    src={avatar} 
                    alt="user avatar"
                    style={{ maxWidth: 250, marginLeft:"auto", marginRight:"auto" }}
                />
                <Header as="h3" style={{fontWeight:"lighter"}}>Username: {username}</Header>
                    {updatedAt === createdAt ? (
                        <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Posted: {createdDate}</Header>
                    ) : (
                        <Header style={{fontWeight:"lighter", fontSize: "12px" }}>Updated: {updatedDate}</Header>
                    )}
                {!isClicked ? (
                    <p style={{fontWeight:"lighter", fontSize: "20px", marginLeft:"auto", marginRight:"auto",marginBottom:"0px",paddingLeft:"100px", paddingRight:"100px" }}>{content}</p>
                ) : (
                    <Form onSubmit={handleEdit} style={{textAlign: "left", marginTop:"20px", marginLeft:"auto",
                    marginRight:"auto", paddingLeft:"150px",
                    paddingRight:"150px" }}>
                        <Form.Field
                        label="Update Post:"
                        style={{fontWeight:"lighter", fontSize: "20px"}}
                        onChange={handleInputChange} 
                        type="text" 
                        control={TextArea}
                        value={updatedText}
                        />
                        <Button>Update</Button>
                    </Form>
                )}
                {user.username === username ? (
                    <>
                        <Button
                            onClick={handleEditClick}
                            className={!isClicked ? "edit" : "hidden"}
                        >
                            Edit
                        </Button>
                        <Button onClick={handleRemove} className="remove">
                            Delete
                        </Button>
                    </>
                ) : null}
            </div>
            <br />
        </>
    );
}

export default Post;