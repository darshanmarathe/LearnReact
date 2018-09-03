import React, { Component } from 'react';

import {
  Route,
  Link
} from 'react-router-dom';


export default class Language extends Component {

  constructor(props) {
    super();
    console.dir(props);
    this.Language = "golang"
  }


  GetFeatures = () => {
    var lis = this.Language.features.map(function (item, i) {
      return <li key={i} className="list-group-item">
        <Link to={`/Technologies/feature/${item.name}`}>
          {item.name}
        </Link>
      </li>
    })

    return lis;

  }




  render() {
    return (
      <div>
        <br />
        <h1>{this.Language.name}</h1>
        <hr />
        <br />

        <ul className="list-group">
          {this.GetFeatures()}
        </ul>


      </div>
    )
  };
}
