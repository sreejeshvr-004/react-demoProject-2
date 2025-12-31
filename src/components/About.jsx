import AuthContext from "../utils/AuthContext.js";
import StudentClass from "./StudentClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a About Page</h1>
        <AuthContext.Consumer>
          {({ loggedInUserName }) => <h1>User:{loggedInUserName}</h1>}
        </AuthContext.Consumer>

        <StudentClass
          name={"first Child"}
          location={"Ernakulam"}
          contact={"xyz@gmail.com"}
        />
      </div>
    );
  }
}

export default About;

/* const About = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <StudentClass name={"Roshin"} age={22} location={"Kannur"} contact={"roshin@gmail.com"}/>
    </div>

  );
};

export default About; */
