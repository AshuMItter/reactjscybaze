import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import SecondComponent from './secondcomponent';


class SelecOptionForm extends React.Component{

    constructor(){
        super();
        this.state ={value:''}
        this.props ={hello: 4};

        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

   handlechange(event){
       alert('on change called...')
    this.setState(function(preState,prop){
       return {
           value : event.target.value
       }
    })
   
   }
   handlesubmit(event){
   // event.preventDefault();
     alert(this.state.value);
   }


    render(){
         return   (
  
  <form action="https://www.google.com/search?" method='get'>
    <select name="fruitselect"  onChange={this.handlechange}>
   
   <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
   
   </select>
   <br></br>
  
   <input type="text" name="q"></input>

  <input type="submit" value="Submit" onClick={this.handlesubmit} />
</form>
  
      )


    }
}
SelecOptionForm.defaultProps= {
    type:"Hello World"
};
export default SelecOptionForm;