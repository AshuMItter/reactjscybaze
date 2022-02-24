
import React from 'react';
import ReactDOM from 'react-dom';

class EventsChild extends React.Component{

     

    mouseentered(event){

       alert('Mouse Entered')
    }
    clicked(event){
        
    
    
        alert('Button Clicked');
    }

    render(){



        return( <div>
            
        <button id="btn1" onClick={this.clicked}> 
          Click Me
        </button><br></br>

        <button id="btn1" onMouseEnter={this.mouseentered}> 
          Mouse Enter
        </button><br></br>

     
        

        </div>
        )
    }


}

export default EventsChild;