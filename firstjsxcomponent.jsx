import React from 'react';
import ReactDOM from 'react-dom';
import SecondComponent from './secondcomponent';
import ThirstComponent from './thirdcomponent';


var val = <h1> Hello World </h1>;


class FirstComponent1 extends React.Component{



     render(){
  
        if(this.props.type =="text"){
            return(

                <input type={this.props.type} ></input>
            )
        }
        else if(this.props.type=="btn"){
            return (

                <button id="btn">
                    Dynamic Click;
                </button>
            )
        }

            
    }
}

export default FirstComponent1;