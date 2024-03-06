import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }
    render(){
        // console.log("Parent render")
        return (
            <div>
                <h1> About page</h1>
                <h1>Food Delivery App</h1>
                {/*<User name={"Ak from function"}/>*/}
                <UserClass name={"Ak from class"}/>
            </div>
        );
    }
}


export default About;
