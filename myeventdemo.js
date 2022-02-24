import React from 'react';
import ReactDOM from 'react-dom';



class MyEventDemo extends React.Component{
        constructor(props){
            super(props);
           
           this.state = {
               value : ' '
           }
            this.clickhandler = this.clickhandler.bind(this);
            this.changehanlder = this.changehanlder.bind(this);
           
        }

     changehanlder(e){
       this.setState(function(prevState,properties){

          return{
              value : e.target.value
          }
       })
     }

     clickhandler(){

         alert(this.state.value);
     }
      
      

      render(){
         return (
             <>
             <input type="text" onChange={this.changehanlder}></input>
    <button id="btn1" name="Button"  onClick={this.clickhandler}>
        Click Me
    </button>
             </>
         )

      }
    }

export default MyEventDemo