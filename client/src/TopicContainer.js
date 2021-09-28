import { useState, useEffect } from "react";

import { Form,TextArea, Button } from "semantic-ui-react";

import Topic from "./Topic.js";

function TopicContainer({ user, urlCategory, setURLTopic, functionalCategory}) {
    
    const [topicArray, setTopicArray] = useState([])
    const [newTopicContent, setNewTopicContent] = useState(false)
    const [newTopicClick, setNewTopicClick] = useState(false)
    
    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray(data.filter(thread => (thread.category.category.toLowerCase() === urlCategory)))
        })
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const newTopic = {
            title: newTopicContent,
            user_id: user.id,
            category_id: functionalCategory.id
        };
        fetch("/topics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTopic),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray((prevTopics) => [...prevTopics, data]);
        });
        event.target.reset();
    }

    function handleInputChange(event) {
        setNewTopicContent(event.target.value);
    }

    function handleButtonClick(){
        setNewTopicClick(!newTopicClick)
    }

        
    

    const topic = topicArray.map((topic) => {
        return (
            <Topic
                topic={topic}
                user={user}
                id={topic.id}
                key={topic.id}
                createdDate={topic.created_date}
                updatedDate={topic.updated_date}
                createdAt={topic.created_at}
                updatedAt={topic.updated_at}
                topicArray={topicArray}
                setTopicArray={setTopicArray}
                setURLTopic={setURLTopic}
                urlCategory={urlCategory}
            />
        );
    });


    return (
        <>
            <div className="Threads">{topic}</div>
            <br/>
                {!newTopicClick ? ( 
                    <button onClick={handleButtonClick}>New Topic</button> 
                ) : (
                    <Form id="topic-form" onSubmit={handleSubmit}>
                        <Form.Field
                            label="Topic:"
                            name="input"
                            autoComplete="off"
                            type="text"
                            placeholder="What would you like to discuss?"
                            control={TextArea}
                            onChange={handleInputChange}
                        /> 
                        <Button type="submit" className="submit-button">
                            Submit
                        </Button>
                        <Button className="cancel-button" onClick={handleButtonClick}>
                            Cancel
                        </Button>
                    </Form>
                )}
        </>
    );
}

export default TopicContainer;
