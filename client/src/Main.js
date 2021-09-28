import PostContainer from "./PostContainer";
import CategoryContainer from "./CategoryContainer"
import Profile from "./Profile";
import Home from "./Home"
import TopicContainer from "./TopicContainer"
import Search from "./Search"
import { Form,TextArea, Button } from "semantic-ui-react";


import Category from "./Category.js";

import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";



function Main({ user, setUser }) {

    const [categoryArray, setCategoryArray] = useState([]);
    const [enableAdmin, setEnableAdmin] = useState(false)
    
    const [urlCategory, setURLCategory] = useState("")
    const [urlTopic, setURLTopic] = useState("")
    const [functionalCategory, setFunctionalCategory] = useState({})
    const [otherUserProfile, setOtherUserProfile] = useState({})

    useEffect(() => {
        fetch("/categories")
            .then((resp) => resp.json())
            .then((data) => setCategoryArray(data));
    }, []);

    const category = categoryArray.map((category) => {
        return (
            <Category
                category={category}
                subcategory={category.category.to_lower_case}
                user={user}
                key={category.id}
                id={category.id}
                createdDate={category.created_date}
                updatedDate={category.updated_date}
                createdAt={category.created_at}
                updatedAt={category.updated_at}
                categoryArray={categoryArray}
                setCategoryArray={setCategoryArray}
                setURLCategory={setURLCategory}
                setFunctionalCategory={setFunctionalCategory}
            />
            
        );
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div
        style={{
            textAlign: "center",
            paddingRight: "200px",
            paddingLeft: "200px",
            paddingBottom: "200px",
        }}
        >

            <Switch>
                <Route exact path="/">
                    <Home user={user} />
                </Route>

                <Route exact path="/categories">
                    <h1>Categories:</h1>
                    <CategoryContainer user={user} category={category} categoryArray={categoryArray} setCategoryArray={setCategoryArray}/>
                </Route>

                <Route exact path={`/categories/${urlCategory}`}>
                    <h1>{capitalizeFirstLetter(urlCategory)}</h1>
                    <TopicContainer functionalCategory={functionalCategory} user={user} urlCategory={urlCategory} setURLTopic={setURLTopic} />
                </Route>

                <Route exact path={`/categories/${urlCategory}/${urlTopic.id}`}>
                    <h1>{urlTopic.title}</h1>
                    <PostContainer user={user} category={urlCategory} urlTopic={urlTopic} setOtherUserProfile={setOtherUserProfile}/>
                </Route>

                <Route exact path={`/profile/${user.username}`}>
                    <Profile user={user} setUser={setUser} setEnableAdmin={setEnableAdmin}/>
                </Route>

                <Route exact path={`/profile/${otherUserProfile.username}`}>
                    <Profile user={otherUserProfile} setUser={setUser} setEnableAdmin={setEnableAdmin}/>
                </Route>

                <Route exact path="/search">
                    <Search user={user} setURLTopic={setURLTopic} urlCategory={urlCategory}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;
