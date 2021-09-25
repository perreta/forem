import PostContainer from "./PostContainer";
import CategoryContainer from "./CategoryContainer"
import Profile from "./Profile";
import Home from "./Home"
import TopicContainer from "./TopicContainer"
import { Switch, Route } from "react-router-dom";

function Main({ user, setUser }) {
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
                <h2>Categories</h2>
                <CategoryContainer user={user} />
            </Route>

            <Route exact path="/profile">
                <Profile user={user} setUser={setUser} />
            </Route>
        </Switch>
    </div>
  );
}

export default Main;
