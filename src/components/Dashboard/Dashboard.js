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

    componentDidMount() {
        this.getHouses()
    }

     getHouses() {
         axios.get('/api/houses').then((houses) => {
            // Confired data destructure off of houses,
            // the array of houses shows up in console.log
            const {data} = houses;
            this.setState({data})
        })
    }

    
    renderHouses() {
        const {houses} = this.state
        let houseRender = houses.map((element, index) => {
            const {name, address, city, state,
            zip, img, mortgage, rent} = element

            return <div key={index}><House /></div>
        })

        return houseRender;
    }
  
    render() {
       
        return (
            <div className="dashboard">
                <div className="dashHeader">
                    <h1 id="dashboardTitle">Dashboard</h1>
                    <Link to="/wizard"><button id="newPropertyButton">Add New Property</button></Link>
                </div>
                <div>
                {this.renderHouses()}
                </div>
            </div>
        )
    }
}

export default Dashboard