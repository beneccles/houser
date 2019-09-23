import React, { Component } from 'react'
import store, { HANDLE_STEP1 } from '../../store';

class One extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            // If we are coming back from a future step,
            // initialize the input boxes with their original data.
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zipcode: reduxState.zipcode
            })
        })
    }

    handleStep1 = () => {
        store.dispatch({
            type: HANDLE_STEP1,
            payload: this.state
        })
    }

    handleInput = (e, fieldName) => {
        this.setState({ [fieldName]: e.target.value })
    }

    render() {
        return (
            <div className="StepOne">
                <div id="stepOneName">
                    <input value={this.state.name} type="text" onChange={(e) => this.handleInput(e, 'name')} placeholder="name" />
                </div>
                <div id="stepOneAddress">
                    <input value={this.state.address} type="text" onChange={(e) => this.handleInput(e, 'address')} placeholder="address" />
                </div>
                <div id="stepOneThree">
                    <input value={this.state.city} type="text" onChange={(e) => this.handleInput(e, 'city')} placeholder="city" />
                    <input value={this.state.state} type="text" onChange={(e) => this.handleInput(e, 'state')} placeholder="state" />
                    <input value={this.state.zipcode} type="text" onChange={(e) => this.handleInput(e, 'zipcode')} placeholder="zipcode" />
                </div>
                <div className="naviButtons">
                    <button onClick={() => {this.handleStep1()
                        this.props.history.push('/wizard/two') }}>Next </button>
                    <button onClick={() => { this.props.history.push('/') }}>Cancel </button>
                </div>
            </div>
        )
    }
}
export default One