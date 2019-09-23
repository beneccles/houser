import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import deleteIcon from '../../assets/deleteIcon.svg'

class House extends Component {

    render() {
        const { name, address, city, state,
            zip, img, mortgage, rent, id} = this.props
        return(
            <div className="homeBox">
                <div className="homeImage" style={{ backgroundImage: `url('${img}')`}}>
                    {/* <img className="homeImage" src={img} alt="house" /> */}
                </div>
                <div className="homeAddress">
                    <p>{`Property Name: ${name}`}</p>
                    <p>{`Address: ${address}`}</p>
                    <p>{`City: ${city}`}</p>
                    <p>{`State: ${state}`}</p>
                    <p>{`Zip: ${zip}`}</p>
                </div>
                <div id="homeRent">
                    <pre>{`Monthly Mortgage: ${mortgage}`}</pre>
                    <pre>{`Rent: ${rent}`}</pre>
                </div>
                <div id="deleteButton">
                    <Link to='/'><img className="deleteIcon" src={deleteIcon} onClick={() => this.props.delete(id)} /></Link>
                </div>
            </div>
        )
    }
}

export default House