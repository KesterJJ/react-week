import {Component} from 'react'

class Clock2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }

    }

    render(){
        return(
            <>
                <h1>What is the time you ask? </h1>
                <p>It is... {this.state.date.toLocaleTimeString()}. </p>
            </>
        );
    }
}


export default Clock2;