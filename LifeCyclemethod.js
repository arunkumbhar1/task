import React, { Component } from 'react'

export default class LifeCyclemethod extends Component {
    constructor(){
        super();
        this.state={
            fname:"abc",
            count:0
        }
    }
updatedata=()=>{
    this.setState({count:this.state.count+1})
    this.setState({count:this.props.fname})
}
componentDidMount(){
    console.log("inside component didmount"); 
}
  render() {
    return (
      <div>
          <h3>fname:{this.state.fname}</h3>
          <h3>lname:{this.state.count}</h3>
          <button onClick={this.updatedata}>update</button>
      </div>
    )
  }
}
