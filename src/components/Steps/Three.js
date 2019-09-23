import React, { Component } from 'react'
import store, { HANDLE_MORTGAGE, HANDLE_RENT, CLEAR_STATE } from '../../store'
import axios from 'axios'

class Three extends Component {
    constructor() {
        super()
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    // DONT FORGET TO CREATE THE ACTION CONSTANTS FOR THESE IN STORE!
    handleInput = (e, fieldName) => {
        this.setState({ [fieldName]: e.target.value})
    }
    
    precisionThanos = () => {
        store.dispatch({
            type: CLEAR_STATE
        })
    }

    submitToDB = () => {
        const reduxState = store.getState()
        const newHouse = {...reduxState, ...this.state}
        axios.post('/api/house', newHouse).then((res) => {
            this.precisionThanos()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="stepThree">
                <div className="stepThreeInputs">
                    <div className="Mortgage">
                        <h4>Monthly Mortgage Amount</h4>
                        <input value={this.state.mortgage} type="number" onChange={(e) => this.handleInput(e, 'mortgage')} placeholder="Mortgage" />
                    </div>
                    <div className="Rent">
                        <h4>Desired Monthly Rent</h4>
                        <input value={this.state.rent} type="number" onChange={(e) => this.handleInput(e, 'rent')} placeholder="Rent" />
                    </div>
                </div>
                <div className="stepThreeButtons">
                    <button onClick={() => { this.props.history.push('/wizard/two') }}>Back </button>
                    <button onClick={this.submitToDB}>Complete</button>
                </div>
            </div>
        )
    }
}

export default Three