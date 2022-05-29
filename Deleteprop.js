import React, { Component } from 'react'

export default class Deleteprop extends Component {
    constructor(){
        super();
        this.state=[
            
                {
                    tital:"buy eggs",
                    text:"buy 12 eggs",
                    completed:false
                },
                {
                    tital:"buy milk",
                    text:"buy 1lt",
                    completed:false
                },
                {
                    title:"buy veggies",
                    text:"buy carrots and potatoes",
                    completed:true
                }
            ]
    
        }
        // delets=(pindex)=>{
        //   const pcopy = this.state.


        // }
  render() {
      let newdata=this.state.map(arr=>{
          return(
          <h1>
              <h1>{arr.tital},{arr.text},{arr.completed}</h1>
          </h1>
          )
      })
    return (
      <div>
          {newdata}
          <h1>{this.state.tital}</h1>
          <h1>{this.state.text}</h1>
          <h1>{this.state.completed}</h1>
          <button onClick={this.delets}>Delete</button>
      </div>
    )
  }
}
