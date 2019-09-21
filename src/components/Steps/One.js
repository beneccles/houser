import React, { Component } from 'react'
import store, { HANDLE_NAME, HANDLE_ADDRESS, HANDLE_CITY, HANDLE_STATE, HANDLE_ZIP } from '../../store';

class One extends Component {
    constructor() {
        super()
    }

    // Handle Name Change
    handleName = (e) => {
        store.dispatch({
            type: HANDLE_NAME,
            payload: e.target.value
        })
    }

    handleAddress = (e) => {
        store.dispatch({
            type: HANDLE_ADDRESS,
            payload: e.target.value
        })
    }

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

    render() {
        return (
            <div className="StepOne">
                <div id="stepOneName">
                    <input type="text" onChange={this.handleName} placeholder="name" />
                </div>
                <div id="stepOneAddress">
                    <input type="text" onChange={this.handleAddress} placeholder="address" />
                </div>
                <div id="stepOneThree">
                    <div id="stepOneCity">
                        <input type="text" onChange={this.handleCity} placeholder="city" />
                    </div>
                    <div id="stepOneState">
                        <input type="text" onChange={this.handleState} placeholder="state" />
                    </div>
                    <div id="stepOneZip">
                        <input type="text" onChange={this.handleZip} placeholder="zipcode" />
                    </div>
                </div>
            </div>
        )
    }
}

export default One