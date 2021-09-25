import defaultProfile from "./photos/icons8-name-64.png";
import { Form, Button, TextArea, Header, Image } from "semantic-ui-react";
import PostContainer from "./PostContainer";

function Topic({ topic, user, key, id, createdDate, updatedDate, createdAt, updatedAt, topicArray, setTopicArray }) {

    

    return (
        <>
            <div className="thread">
                <h3 >{topic.title}</h3>
                <p>Last Post: {updatedDate}</p>
                <p>Started: {createdDate}</p>
                <button className="remove">Delete</button>
            </div>

            <h1>Posts</h1>
            <PostContainer user={user} topic={topic}/>

        </>
    )
}

export default Topic;