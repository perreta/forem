import { useEffect, useState } from "react";
import Topic from "./Topic"

function SearchRender({ user, searchTerm, setURLTopic, urlCategory,  }){
    
    const [searchArray, setSearchArray] = useState([])

    useEffect(() => {
        fetch("/topics")
        .then((resp) => resp.json())
        .then((data) => {
            setSearchArray(data.filter((thread) => {
                return (
                    thread.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                    || thread.category.category.toLowerCase().includes(searchTerm.toLowerCase())
                    // || thread.posts.map((post) => {
                    //     post.content.toLowerCase().includes(searchTerm.toLowerCase())
                    // })
                )
            }))
        })
    }, [searchTerm]);

    const topic = searchArray.map((topic) => {
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
                setURLTopic={setURLTopic}
                urlCategory={urlCategory}
            />
        );
    });

    return(
        <div className="Threads">{topic}</div>
    )
}

export default SearchRender