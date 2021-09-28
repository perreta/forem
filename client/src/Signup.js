import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, TextArea, Button, Header } from "semantic-ui-react";



function Signup({ onLogin }) {
    
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [userInput, setUserInput] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        profile_picture: "",
        bio: "",
    });

    function inputOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value)
        setUserInput({
            ...userInput, //spreading the userInput
            [name]: value, //inserting the name and value the user typed in
        });
    // e.target.reset();
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
                    history.push("/");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return (
        <div style={{paddingRight:"300px", paddingLeft:"300px", paddingTop:"100px", paddingBottom:"100px"}}>
            <Header as="h2">Sign Up</Header>
            {errors.map(error => <h2 stylel={{ fontColor: "red" }}>{error}</h2>)}
            <Form onSubmit={handleSubmit} >
                <Form.Group  widths='equal' >
                    <Form.Field
                        fluid
                        id="form-input-control-fullname"
                        control={Input}
                        label="Full Name"
                        name="name"
                        placeholder="Full Name"
                        autoComplete="off"
                        onChange={inputOnChange}
                    />
                    <Form.Field
                        fluid
                        id="form-input-control-username"
                        control={Input}
                        label="Username"
                        name="username"
                        placeholder="Username"
                        autoComplete="off"
                        onChange={inputOnChange}
                    />
                    <Form.Field
                        fluid
                        id="form-input-control-email"
                        control={Input}
                        label="Email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={inputOnChange}
                    />
                    <Form.Field
                        fluid
                        id="form-input-control-password"
                        control={Input}
                        label="Password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        onChange={inputOnChange}
                    />
                    <Form.Field
                        fluid
                        id="form-input-control-image"
                        control={Input}
                        label="Image URL"
                        name="profile_picture"
                        placeholder="Image URL"
                        onChange={inputOnChange}
                    />
                    <Form.Field
                        fluid
                        id="form-input-control-bio"
                        control={TextArea}
                        label="Bio"
                        name="bio"
                        placeholder="Bio"
                        onChange={inputOnChange}
                    />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
            </Form>
    </div>
  );
}

export default Signup;