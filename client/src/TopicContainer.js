import { useState, useEffect } from "react";


import Topic from "./Topic.js";

function TopicContainer({ user, category }) {
    
    const [topicArray, setTopicArray] = useState([]);
    
    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setTopicArray(data.filter(thread => (thread.category.id === category.id)))
        })
    }, []);
        
    

  const topic = topicArray.map((topic) => {
    return (
        <Topic
            topic={topic}
            user={user}
            key={topic.id}
            id={topic.id}
            createdDate={topic.created_date}
            updatedDate={topic.updated_date}
            createdAt={topic.created_at}
            updatedAt={topic.updated_at}
            topicArray={topicArray}
            setTopicArray={setTopicArray}
        />
    );
  });


  return (
      <div className="Threads">{topic}</div>
  );
}

export default TopicContainer;
