import { useState } from "react";
import defaultProfile from "./photos/icons8-name-64.png";
import { Form, Button, TextArea, Header, Image } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import TopicContainer from "./TopicContainer"


function Category({ category, user, id, createdDate, updatedDate, createdAt, updatedAt, categoryArray, setCategoryArray }) {



  return (
    <div>
        <Link to={`/categories/${category.category.toLowerCase()}`}>
            <h2>{category.category}</h2> 
        </Link>
        <p>Last post: {updatedDate}</p>


            <h1>Threads</h1>
            <TopicContainer user={user} category={category} id={id}/>
        {/* <Route exact path={`/categories/${category.category.toLowerCase()}`}>
        </Route> */}
    
    </div>
  )
}

export default Category;