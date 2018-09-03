import React, { Component } from 'react';

import {
    Route,
    Link
} from 'react-router-dom'



//import LanguageStore from '../Stores/LanguageStore';

class Technologies extends Component {

    constructor() {
        super()
        this.state = {
            technos: ["javascript" , "golang"]
        }
    }

    GetLi() {
        var lis = this.state.technos.map(function (item) {
            return <li key={item.id} className="list-group-item">
                <Link to={`/Technologies/techno/${item.id}`}>
                    {item.name}
                </Link>
            </li>
        })
        return lis;
    }
    componentWillMount = () => {
       
    }


   
    render() {
        
        return (
            <ul class="list-group">
                {this.GetLi()}
            </ul>
        );
    }
}





export default Technologies;

