import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1> About page</h1>
            <h1>Food Delivery App</h1>
            {/*<User name={"Ak from function"}/>*/}
            <UserClass name={"Ak from class"}/>
        </div>
    );
};

export default About;
