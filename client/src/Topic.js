import { Link } from "react-router-dom";

function Topic({ topic, user, id, createdDate, updatedDate, createdAt, updatedAt, topicArray, setTopicArray, setURLTopic, urlCategory, enableAdmin }) {

    function handleClick () {
        setURLTopic(topic);
    }

    function handleRemove() {
        fetch(`/topics/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        const topicsToDisplay = topicArray.filter((topic) => {
            if (topic.id === id) return false
            else return true
        });
        setTopicArray(topicsToDisplay);
    }

    return (
        <>
            <div className="thread">
                <Link to={`/categories/${urlCategory}/${topic.id}`}>
                    <h3 onClick={handleClick}>{topic.title}</h3>
                </Link>

                <p>Last Post: {updatedDate}</p>
                <p>Started: {createdDate}</p>
                <button className={enableAdmin?"remove":"hidden"} onClick={handleRemove}>Delete</button>
            </div>
        </>
    )
}

export default Topic;