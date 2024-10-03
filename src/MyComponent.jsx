import React,{Component} from "react";

class MyComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            value:2,
            text:"hi"
        }
    }
    increment = () => {
        this.setState({value:this.state.value + 1})
    }
    decrement = () => {
        if(this.state.value > 0){

        
        this.setState({value:this.state.value -1})}
    }
    handleChange = (event) => {
        console.log(event);
        
        this.setState({text:event.target.value})
    };
    multiply = () => {
        let multiply = prompt("сан жаз")
        this.setState({value:multiply * this.state.value})
    }
    division = () => {
        let multiply = prompt("сан жаз")
        this.setState({value: this.state.value/ multiply})
        console.log(division);
        
    }
    count = () => {
        this.setState({value: this.state.value +10})
    }
    render() {
        return(
            <div>
                <h1>Hello Beka</h1>
                <h4>{this.state.value}</h4>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <h3>{this.state.text}</h3>
                <input onChange={this.handleChange}
                 type="text"
                 value={this.state.text}
                  />
                  <button onClick={this.multiply}>Multiply</button>
                  <button onClick={this.division}>Division</button>
                  <button onClick={this.count}>+10</button>
            </div>
        )
    }
}
export default MyComponent