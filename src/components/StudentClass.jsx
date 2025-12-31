import React from "react"

class StudentClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mark1:90,
            sub2:98,
            counter:0,
             userInfo:{
                name:"",
                bio:"",
                avatar_url:"http://dummy.com"
             }
        }
    }
    async componentDidMount(){
           const data= await fetch("https://api.github.com/users/sreejeshvr-004");
           const json = await data.json()
           this.setState({
            userInfo:json 
           })

    }
    render(){
        const{name,bio,avatar_url}=this.state.userInfo
        return(
            <div className="student-info">
               
               <img src={avatar_url} alt="" />
               <h3>Name:{name}</h3>
               <h4>Bio:{bio}</h4>
               
            </div>
        );
    }
}

export default StudentClass