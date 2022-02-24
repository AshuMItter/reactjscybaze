import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './firstcomponent';
import Form from './form';

class ComponentStateChild extends React.Component{
    constructor(props){
        super(props);
       
    }
    
    
    render(){
   
   return( 
    <>

       

       <Form  myageC={this.props.myage} mynameC={this.props.myname} mylocC={this.props.myloc} />
       
         </>
         
   )

    }
}

export default ComponentStateChild;
