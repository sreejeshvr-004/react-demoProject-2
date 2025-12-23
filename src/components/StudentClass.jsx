import React from "react"

class StudentClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mark1:90,
            sub2:98,
            counter:0
        }
    }
    render(){
        const{name,age,location,contact}=this.props
        return(
            <div className="student-info">
               <h2>Counter:{this.state.counter}</h2>
               <button onClick={()=>{
                this.setState({
                    counter:this.state.counter+1
                })
               }}>Increment Counter</button>
               <button onClick={()=>{
                this.setState({
                    counter:0
                })
               }}>Reset</button>
               <h3>Name:{name}</h3>   
               <h4>Age:{age}</h4>
               <h4>Location:{location}</h4>
               <h4>Marks:[{this.state.mark1 }, {this.state.sub2}]</h4>
               <p>{contact}</p>
               
            </div>
        );
    }
}

export default StudentClass