import React, { Component} from 'react'

export class UpdateDetails extends Component {
    constructor(props) {
        super(props);  
    
        this.state = {
             name:"Arun",
             lastName:this.props.lastName
        };
    }
    NewData=()=>{
        this.setState=({name:"virat",lastName:"Kohli"});
    }
    
    render() {
        return (
            <div>
                <h1>CollectDetails</h1>
                <h1>
                    Mr-{this.state.name}LastName is-{this.state.lastName}
                </h1>
                <h1>
                    <button onClick={this.NewData}>Update</button>
                </h1>
            </div>
        )
    }
}

export default UpdateDetails

