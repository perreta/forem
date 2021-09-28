import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, TextArea } from "semantic-ui-react";


function ProfileUpdate({ user, setUser, isClicked, setIsClicked }) {
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);
    const [bio, setBio] = useState(user.bio);
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                profile_picture: profilePicture,
                bio: bio,
            }),
        })
        .then((r) => r.json())
        .then((user) => {
            if (user.errors) {
                setErrors(user.errors);
            } else {
                setUser(user);
                history.push("/profile");
            }
        });
    }

    return (
        <div
            style={{
                marginLeft:"auto",
                marginRight:"auto" ,
                paddingLeft:"150px",
                paddingRight:"150px",
                paddingBottom: "100px",
                disply: "flex",
            }}
        >
            <Form onSubmit={onSubmit}>
                <Form.Field
                    label="Username"
                    value={username}
                    control={Input}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Form.Field
                    label="Password"
                    value={password}
                    type="password"
                    control={Input}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Form.Field
                    label="Profile Picture"
                    value={profilePicture}
                    autoComplete="on"
                    control={Input}
                    onChange={(e) => setProfilePicture(e.target.value)}
                />

                <Form.Field
                    label="Bio"
                    value={bio}
                    autoComplete="off"
                    control={TextArea}
                    onChange={(e) => setBio(e.target.value)}
                />

                <Button>Update</Button>
                {errors.map((error) => (
                <div>{error}</div>
            ))}
        </Form>
        </div>
    );
}

export default ProfileUpdate;
