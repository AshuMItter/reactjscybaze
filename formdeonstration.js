import React from 'react';
import ReactDOM from 'react-dom';




class FormDemonstration extends React.Component{
           constructor(){

            super();

            this.state ={
                uid : '',
                pwd : ''

            }
            this.handleClick = this.handleClick.bind(this);
            this.handlChange = this.handlChange.bind(this);
            
           }

    
    handleClick(e){
     alert(this.state.uid+" "+this.state.pwd);
    }

    handlChange(e){
       let target = e.target;
       if(target.name =="uid"){
           this.setState({uid: target.value})
       }

       else if(target.name == "pwd")
       {
           this.setState({pwd : target.value})
       }
    }

    render(){

        return( <div>
        <input type="text" name="uid" onChange={this.handlChange} ></input> <br></br>
        <input type="text" name="pwd" onChange={this.handlChange}></input> <br></br>
        <button id="btn1" onClick={this.handleClick} >
            Show the Values
        </button>

        </div>
        )
       }
}
export default FormDemonstration;