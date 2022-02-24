import React from 'react';
import ReactDOM from 'react-dom';
class MyEventDemo1 extends React.Component {
    constructor(props) {
        super(props)
        //to bind the handeler
       
        this.state = { username:'',password:'' }
        this.clickhandler = this.clickhandeler.bind(this);
        this.changehandler = this.changehandler.bind(this);
    }
    clickhandeler(e) {
        //  this.setState(function () { })
        //  alert("This is Button Click ");
        //to prevent submit button from executing 
       e.preventDefault();
        alert(this.state.username+' '+this.state.password);
    }
    changehandler(e) {

        // saving the target value in target
        var target = e.target;

        //checking if the name is uid
        if(target.name =="uid"){

            //udating the state
         this.setState({username:target.value})
    }
    // checking if the name is 'pwd'
    else if(target.name=="pwd"){
        //updating the state
        this.setState({password: target.value});
    }


    }
    render() {
        return (
            <>
            <form atcion="https://www.google.com/" method='post'>
                <input type="text" name="uid" onChange={this.changehandler}>
                </input> <br></br>
                <input type="text" name="pwd" onChange={this.changehandler}></input><br></br>
                <input type="submit" id="btn1" value="submit"  onClick={this.clickhandler}></input>
                </form>
         </>)
    }
}

export default MyEventDemo1;
