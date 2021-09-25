import ProfileUpdate from "./ProfileUpdate";
import defaultProfile from "./photos/icons8-name-64.png";
import { Header,Image, Container } from "semantic-ui-react";
import { useState } from "react"




function Profile({ user, setUser }) {
    const [ isClicked, setIsClicked ] = useState(false)
    // console.log(user);

    function handleEditClick(e) {
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    return (
        <>
            {user ? (
                <div style={{marginTop:"50px"}}>
                    <Header as="h1">Your Profile</Header>

                    <Container text style={{ display: "flex", justifyContent: "center"}}>
                        <Image
                        src={user.profile_picture}
                        height="200px"
                            alt="user profile picture"
                        />
                        <p style={{textAlign: "left", marginTop:"20px"}}>
                            <Header as="h4">Username: {user.username}</Header>
                            <Header as="h4">Bio: 
                            <br/>
                            {user.bio}</Header>
                        </p>
            
                    </Container>
                    <button
                        onClick={handleEditClick}
                        className={!isClicked ? "edit" : "hidden"}
                    >
                    Edit
                    </button>
                    <>
                        <Header as="h2">Edit Profile</Header>
                        <ProfileUpdate user={user} setUser={setUser} />
                    </>
                </div>
            ) : null}{" "}
        </>
    );
}

export default Profile;
