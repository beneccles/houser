import React, { Component } from 'react'
import store, { HANDLE_NAME, HANDLE_ADDRESS, HANDLE_CITY, HANDLE_STATE, HANDLE_ZIP } from '../../store';
import { Link, withRouter } from "react-router-dom";

class One extends Component {
    constructor() {
        super()
        const home = store.getState()
        this.state ={
            // If we are coming back from a future step,
            // initialize the input boxes with their original data.
            name: home.name,
            address: home.address,
            city: home.city,
            state: home.state,
            zip: home.zipcode
        }
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zipcode
            })
        }).bind(this)
    }

    componentWillUnmount() {
        this.unsubscribe();
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
                    <input value={this.state.name} type="text" onChange={this.handleName} placeholder="name" />
                </div>
                <div id="stepOneAddress">
                    <input value={this.state.address} type="text" onChange={this.handleAddress} placeholder="address" />
                </div>
                <div id="stepOneThree">
                    <div id="stepOneCity">
                        <input value={this.state.city} type="text" onChange={this.handleCity} placeholder="city" />
                    </div>
                    <div id="stepOneState">
                        <input value={this.state.state} type="text" onChange={this.handleState} placeholder="state" />
                    </div>
                    <div id="stepOneZip">
                        <input value={this.state.zip} type="number" onChange={this.handleZip} placeholder="zipcode" />
                    </div>
                </div>
                <div className="naviButtons">
                <button onClick={() => {this.props.history.push('/wizard/two')}}>Next </button>
                <button onClick={() => {this.props.history.push('/')}}>Cancel </button>
                </div>
            </div>
        )
    }
}

export default One