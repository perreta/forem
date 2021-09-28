import { useState } from "react";
import { Form,TextArea, Button } from "semantic-ui-react";

function PostForm({ setPostArray, user, urlTopic }) {
    
    const [content, setContent] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const newPost = {
            content: content,
            user_id: user.id,
            topic_id: urlTopic.id
        };
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPostArray((prevPosts) => [...prevPosts, data]);
        });
        event.target.reset();
    }

    function handleInputChange(event) {
        setContent(event.target.value);
    }

    return (
        <div style={{textAlign:"center", paddingRight:"200px",  paddingLeft:"200px", paddingBottom: "50px" }}>
            <Form id="post-form" onSubmit={handleSubmit}>
                <Form.Field
                    label="New Message:"
                    name="input"
                    autoComplete="off"
                    type="text"
                    placeholder="Start Writing..."
                    control={TextArea}
                    onChange={handleInputChange}
                />
                <Button type="submit" className="submit-button">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default PostForm;
