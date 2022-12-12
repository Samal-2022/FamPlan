
import { Component } from "react";
import done from './done.png'


export class Planner extends Component {
    state ={
        userInput:'',
        planner:[]

    }

    onChangeEvent(e){
        this.setState({userInput:e})
        console.log(e)

    }

    addItem(input){
        if(input === ''){
            alert('Please, type something')
        }
        else {
            let listArray = this.state.planner;
        listArray.push(input)
        this.setState({planner:listArray, userInput:''})
        }       
    }

    deleteItem(){
        let listArray = this.state.planner;
        listArray = [];
        this.setState({planner:listArray})
    }

    crossedWord(e) {
        const li = e.target
        li.classList.toggle('crossed')
    }

    onFormSubmit(e){
        e.preventDefault();

    }

    render() {
        return <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input type='text' placeholder="What are your plans for the weekend?" onChange={(e) =>this.onChangeEvent(e.target.value)} value={this.state.userInput}/>
            </div>
            <div className="container">
            <button className="add" onClick={()=>this.addItem(this.state.userInput)}>ADD</button>
            </div>
                <ul>
                    {this.state.planner.map((item,index)=>(
                    <li onClick={this.crossedWord} key={index}> <img src={done} alt='activities' width='30px'/> {item}</li>
                    ))}
                </ul>
                <div className="container">
                    <button className="clear" onClick={() =>this.deleteItem()}>CLEAR</button>
                </div>
            </form>       
        </div>
          
    }
}

