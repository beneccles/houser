import React, { Component } from 'react'
import House from '../House/House'

class Dashboard extends Component {
    constructor(){
        super()


    }

    render() {
        return(
            <div>
                <h1>Dashboard</h1>
                <House />
            </div>
        )
    }
}

export default Dashboard