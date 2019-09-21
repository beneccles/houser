import React, { Component } from 'react'

class House extends Component {
    constructor(props){
        super(props)


    }

    render() {
        const { name, address, city, state,
            zip, img, mortgage, rent } = this.props
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
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default House