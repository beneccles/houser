import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houses').then((res) => {
            // Confired data destructure off of houses,
            // the array of houses shows up in console.log
            this.setState({ houses: res.data })
        })
    }

    render() {
        const { houses } = this.state
        let houseRender = houses.map((element, index) => {
            const { name, address, city, state,
                zip, img, mortgage, rent } = element

            return <div key={index}>
                <House 
                name={name}
                address={address}
                city={city}
                state={state}
                zip={zip}
                img={img}
                mortgage={mortgage}
                rent={rent}/>
                </div>
        })
        return (
            <div className="dashboard">
                <div className="dashHeader">
                    <h1 id="dashboardTitle">Dashboard</h1>
                    <Link to="/wizard/one"><button id="newPropertyButton">Add New Property</button></Link>
                </div>
                <div>
                   {houseRender}
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)