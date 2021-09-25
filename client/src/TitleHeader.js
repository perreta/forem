import { Header, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./photos/icons8-typewriter-with-paper-50.png";
import typingLogo from "./photos/WavyViciousIrishdraughthorse-size_restricted.gif";
import defaultProfile from "./photos/icons8-name-64.png"

function TitleHeader({ user }) {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <Header as="h1">
                <Header.Content>
                    FOR'EM
                </Header.Content>

                {user ? (
                    <Link to="/profile">    
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
                    <Header as="h2" style={{ fontWeight: "lighter" }}>
                        Welcome to For'em{" "}
                    </Header>
                    <Image
                        src={typingLogo}
                        style={{
                            float: "left",
                            height: "100px",
                            width: "200px",
                            margin: "20px",
                        
                        }}
                    />

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
