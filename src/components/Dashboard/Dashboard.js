import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House from '../House/House'

class Dashboard extends Component {
    constructor() {
        super()


    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashHeader">
                    <h1 id="dashboardTitle">Dashboard</h1>
                    <Link to="/wizard"><button id="newPropertyButton">Add New Property</button></Link>
                </div>
                <House />
            </div>
        )
    }
}

export default Dashboard