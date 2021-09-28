import React, { useEffect, useState } from "react";
import TitleHeader from "./TitleHeader";
import Homepage from "./Homepage";

// COMMANDS THAT NEED TO RUN
  // npm install --prefix client
  // npm install semantic-ui-react semantic-ui-css
  // npm start --prefix client
  // npm install react-router-dom

function App() {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
    // auto-login
        fetch("/me")
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => setUser(user));
            }
        });
    }, []);

  return (
    <>
      <TitleHeader user={user} />
      <Homepage user={user} setUser={setUser} />
    </>
  );
}

export default App;
