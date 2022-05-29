import axios from 'axios';
import React, { Component } from 'react'

export default class SampleNetworkcall extends Component {
    constructor(){
        super();
        this.state={
            serverData:[]
        }
    }
    componentDidMount(){
        axios.get("https://hn.algolia.com/api/v1/search?query=angular")
        .then((res)=>this.setState({serverData:res.data}))
        .catch((err)=>console.log(err))
    }
  render() {
    return (
      <div>
          <h1>Dash Board</h1>
          {
              this.state.serverData.map((item)=>(
                  <div>
                      <h1>{item.tital}</h1>
                  </div>
              ))
          }
      </div>
    )
  }
}
