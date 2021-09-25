import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {
  const history = useHistory();

  function handleLogout() {
    console.log("hi")
      fetch("/logout", {
        method: "DELETE",
  
      })
        .then((r) => {
          // console.log(r);
          setUser(null);
          history.push("/");
        });


  }

  return (
    <>
      <Menu style={{marginTop:"0px"}}>

        <Menu.Item>
          <NavLink
            strict
            to="/categories"
            style={{ color: "grey" }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
           Categories
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink
            strict
            to="/profile"
            style={{ color: "grey" }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
           Profile
          </NavLink>
        </Menu.Item>

        {user ? (
          <Menu.Item>
            <Menu.Header onClick={handleLogout}   style={{ color: "grey", cursor: "pointer"}}>
               Logout
            </Menu.Header>
          </Menu.Item>
        ) : null}

      </Menu>
    </>
  );
}

export default NavBar;
