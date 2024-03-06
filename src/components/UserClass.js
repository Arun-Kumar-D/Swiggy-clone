import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "dummmy",
                location: "default",
            },
        };
        // console.log("Child constructor")   
    }

    async componentDidMount(){
            const data = await fetch("https://api.github.com/users/Arun-Kumar-D");
            const json = await data.json(); 


            this.setState({
                userInfo: json,
            })
            console.log(json);
    }

    render(){
        // console.log("Child render");
        return(
            <div className='user-card'>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: arun99kumar.d@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;