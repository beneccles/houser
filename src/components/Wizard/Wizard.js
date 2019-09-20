import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, 
{HANDLE_NAME, HANDLE_ADDRESS, 
 HANDLE_CITY, HANDLE_STATE, HANDLE_ZIP} from '../../store';

class Wizard extends Component {
    constructor() {
        super()
    }

    handleName = (e) => {
        store.dispatch({
            type: HANDLE_NAME,
            payload: e.target.value
        })
    }

    // handleName(name) {
    //     this.setState({name})
    //     console.log(this.state.name)
    // }

    handleAddress = (e) => {
        store.dispatch({
            type: HANDLE_ADDRESS,
            payload: e.target.value
        })
    }

    // handleAddress(address) {
    //     this.setState({address})
    //     console.log(this.state.address)
    // }

    handleCity = (e) => {
        store.dispatch({
            type: HANDLE_CITY,
            payload: e.target.value
        })
    }

    handleState = (e) => {
        store.dispatch({
            type: HANDLE_STATE,
            payload: e.target.value
        })
    }

    handleZip = (e) => {
        store.dispatch({
            type: HANDLE_ZIP,
            payload: e.target.value
        })
    }

    // handleState(state) {
    //     this.setState({state})
    //     console.log(this.state.state)
    // }

    // handleZip(zip) {
    //     this.setState({zip})
    //     console.log(this.state.zipcode)
    // }

    render() {
        return (
            <div className="wizardBody">
                <div className="wizardHeader">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <input type="text" onChange={this.handleName} placeholder="name" />
                <input type="text" onChange={this.handleAddress} placeholder="address" />
                <input type="text" onChange={this.handleCity} placeholder="city" />
                <input type="text" onChange={this.handleState} placeholder="state" />
                <input type="text" onChange={this.handleZip} placeholder="zipcode" />


            </div>
        )
    }
}

export default Wizard