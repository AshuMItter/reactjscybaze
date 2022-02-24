import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ThirstComponent from './thirdcomponent';



class SecondComponent extends React.Component{

    render(){

        return (
            <div>
                <h1> My message is {this.props.msg}</h1>
                <Link to="/">Home</Link> 
                </div>
               )     
        

    
    }
}

export default SecondComponent;