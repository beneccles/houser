import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
        }

    }
    
    handleName(name) {
        this.setState({name})
        console.log(this.state.name)
    }

    handleAddress(address) {
        this.setState({address})
        console.log(this.state.address)
    }

    handleCity(city) {
        this.setState({city})
        console.log(this.state.city)
    }

    handleState(state) {
        this.setState({state})
        console.log(this.state.state)
    }

    handleZip(zip) {
        this.setState({zip})
        console.log(this.state.zipcode)
    }

    render() {
        return (
            <div className="wizardBody">
                <div className="wizardHeader">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <input type="text" onChange={e => this.handleName(e.target.value)} placeholder="name" />
                <input type="text" onChange={e => this.handleAddress(e.target.value)} placeholder="address" />
                <input type="text" onChange={e => this.handleCity(e.target.value)} placeholder="city" />
                <input type="text" onChange={e => this.handleState(e.target.value)} placeholder="state" />
                <input type="text" onChange={e => this.handleZip(e.target.value)} placeholder="zipcode" />


            </div>
        )
    }
}

export default Wizard