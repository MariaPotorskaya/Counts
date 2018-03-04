import React, { Component } from 'react';
import Area from './Area'

class Container extends Component {
    render() {
        return(
            <div id="container">
                <Area color='#FF7360'></Area>
                <Area color='#FFF0C6'></Area>
                <Area color='#FFF9FA'></Area>
                <Area color='#53E5ED'></Area>
            </div>
        )
    }
}

export default Container;