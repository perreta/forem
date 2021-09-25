import { useState } from "react";
import defaultProfile from "./photos/icons8-name-64.png";
import { Form, Button, TextArea, Header, Image } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import TopicContainer from "./TopicContainer"


function Category({ category, user, id, createdDate, updatedDate, createdAt, updatedAt, categoryArray, setCategoryArray }) {



  return (
    <div>
            <Route exact path="/categories">
                <Link to={`/categories/books`}>
                    <h2>{category.category}</h2> 
                </Link>
                <p>Last post: {updatedDate}</p>  
            </Route>
            
            <Route exact path="/categories/books">
                <h1>Threads</h1>
                <TopicContainer user={user} category={category} id={id}/>
            </Route>

    </div>
  )
}

export default Category;