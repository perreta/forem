import ProfileUpdate from "./ProfileUpdate";
import { Header,Image, Container } from "semantic-ui-react";
import { useState } from "react"
import { useHistory } from "react-router-dom";



function Profile({ user, setUser, enableAdmin, setEnableAdmin }) {
    
    const [ isClicked, setIsClicked ] = useState(false)
    const history = useHistory();

    function handleEditClick(){
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    function handleAdminCheck(){
        setEnableAdmin((prevEnableAdmin) => !prevEnableAdmin)
    }

    const categories = user.categories.map(category => {
        return category.category
    }).join(", ");

    
    console.log("hi")
    console.log(user)
    console.log("hi")
    function handleUserDelete() {

    }

    return (
        <>
            {user ? (
                <div style={{marginTop:"50px"}}>
                    <Header as="h1">
                        {user.name}'s Profile
                    </Header>

                    {user.admin ? (
                    <>
                        <label>Enable Administrator Contols?</label>
                        <input type="checkbox" onChange={handleAdminCheck}/>
                    </>
                    ) : (
                        null
                    )
                    }
                    
                    <Container text style={{ display: "flex", justifyContent: "center"}}>
                        <Image
                            src={user.profile_picture}
                            height="200px"
                            alt="user profile picture"
                        />
                        <p style={{textAlign: "left", marginTop:"20px"}}>
                            <Header as="h4">Name: {user.name}</Header>
                            <Header as="h4">Username: {user.username}</Header>
                            <Header as="h4">Bio: {user.bio}</Header>
                            {categories ? <Header as="h4">Posts in: {categories} </Header>: null}

                        </p>
            
                    </Container>

                    <div className={ true ? "edit" : "hidden"}>
                        <button
                            onClick={handleEditClick}
                            className={!isClicked ? "edit" : "cancel"}
                        >
                            {isClicked ? "Cancel" : "Edit"}
                        </button>
                        
                        {/* <button
                            onClick={handleLogout}
                            className={!isClicked ? "cancel" : "edit"}
                        >
                            Logout                    
                        </button> */}
                    </div>

                    <button
                        onClick={handleUserDelete}
                        className={enableAdmin ? "delete-user" : "hidden"}
                    >
                        Delete User                    
                    </button>

                    <div className={!isClicked ? "hidden" : "edit-window"}>
                        <Header as="h2">Edit Profile</Header>
                        <ProfileUpdate user={user} setUser={setUser} isClicked={isClicked} setIsClicked={setIsClicked}/>
                    </div>

                </div>
            ) : null}{" "}
        </>
    );
}

export default Profile;
