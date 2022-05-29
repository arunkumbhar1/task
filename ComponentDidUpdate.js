import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super();
        this.state={
            
            name:null,
            result:null
        }
    }
    componentDidUpdate(){
        console.warn("componetsDidUpdate");
        if(this.state.result==null){
            this.setState({result:"true"})
        }
        
    }
  render() {
    return (
      <div>
          <h1>ComponentDidUpdate {this.state.name}</h1>
          <button onClick={()=>{this.setState({name:"virat"})}}>Activate</button>
      </div>
    )
  }
}
