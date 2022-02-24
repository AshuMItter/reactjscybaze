import React from 'react';
import ReactDOM from 'react-dom';


class ABC extends React.Component{
    constructor(){
        super()
       
        this.state = {value :' '}

        this.props = {myname:"Ashu"}
       
    
    }
      
     
    
    render(){
   
   return( 
      <div>
        <h1>{this.state.value}</h1>
      </div>
         
   )

    }
}


export default ABC;
