import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    getHouses() {

    }

    render() {
        const {houses} = this.state
        const houseRender = houses.map((element) => {
            return <House />
        })
        return (
            <div className="dashboard">
                <div className="dashHeader">
                    <h1 id="dashboardTitle">Dashboard</h1>
                    <Link to="/wizard"><button id="newPropertyButton">Add New Property</button></Link>
                </div>
                {houseRender}
            </div>
        )
    }
}

export default Dashboard