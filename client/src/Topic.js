import { Link } from "react-router-dom";

function Topic({ topic, user, id, createdDate, updatedDate, createdAt, updatedAt, topicArray, setTopicArray, setURLTopic, urlCategory }) {

    function handleClick () {
        setURLTopic(topic);
    }

    return (
        <>
            <div className="thread">
                <Link to={`/categories/${urlCategory}/${topic.id}`}>
                    <h3 onClick={handleClick}>{topic.title}</h3>
                </Link>

                <p>Last Post: {updatedDate}</p>
                <p>Started: {createdDate}</p>
                <button className="remove">Delete</button>
            </div>
        </>
    )
}

export default Topic;