import React, {Component} from 'react'

export class People extends Component {
    construct (prop) {
        super(prop)

        this.state = {
            counter:0
        }
    }

    incrementCount = () => {
        this.state = ({
            counter: this.state.counter+1
        })
        

    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>You clicked{this.state.Counter} Times</button>
            </div>
        )
    }
}







export default People