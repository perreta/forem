import { Header, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import typingLogo from "./photos/WavyViciousIrishdraughthorse-size_restricted.gif";

function TitleHeader({ user }) {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <Header as="h1">
                <Header.Content>
                    <Link to="/">FOR'EM</Link>
                </Header.Content>

                
                
                {user ? (
                    <Link to={`/profile/${user.username}`}>    
                        <Image
                            src={user.profile_picture}
                            style={{
                                float: "right",
                                height: "50px",
                                width: "50px",
                            }}
                        />
                    </Link>
                ) : (
                    <Divider />
                )}

                <Link to="/search">    
                        <Image
                            src="https://i.imgur.com/7A9gGKJ.png"
                            style={{
                                float: "right",
                                height: "45px",
                                width: "45px",
                            }}
                        />
                </Link>

            </Header>

            {user ? null : (
                <div
                    style={{
                        textAlign: "left",
                        paddingRight: "300px",
                        paddingLeft: "300px",
                        paddingTop: "50px",
                    }}
                >
                    <Header as="h2">
                        Welcome to For'em
                    </Header>
                    

                    <div style={{ textAlign: "center", fontSize: "16px" }}>
                        <Link to="/login">Login &ensp;</Link>
                        <Link to="/signup">&ensp;Signup</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TitleHeader;
