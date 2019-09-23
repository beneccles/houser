import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class House extends Component {
    constructor(props){
        super(props)


    }

    render() {
        const { name, address, city, state,
            zip, img, mortgage, rent, id} = this.props
        return(
            <div className="homeBox">
                <div className="homeImage">
                    <img src={img} alt="house" />
                </div>
                <div className="homeAddress">
                    <p>{`Property Name: ${name}`}</p>
                    <p>{`Address: ${address}`}</p>
                    <p>{`City: ${city}`}</p>
                    <p>{`State: ${state}`}</p>
                    <p>{`Zip: ${zip}`}</p>
                </div>
                <div className="homeRent">
                    <p>{`Monthly Mortgage: ${mortgage}`}</p>
                    <p>{`Rent: ${rent}`}</p>
                </div>
                <div className="deleteButton">
                    <Link to='/'><button onClick={() => this.props.delete(id)}>Delete</button></Link>
                </div>
            </div>
        )
    }
}

export default House