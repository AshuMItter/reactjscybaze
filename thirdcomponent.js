import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class ThirdComponent extends React.Component{

    render(){

        return (

            <>
            <Link to="/">Home</Link>
                <input type="text" required></input>
                <button id="btn2">
                    Jump
                </button>
            </>
        )
    }
}
export default ThirdComponent;