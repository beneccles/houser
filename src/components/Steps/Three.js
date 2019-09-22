import React, { Component } from 'react'
import store, { HANDLE_MORTGAGE, HANDLE_RENT, CLEAR_STATE } from '../../store'
import axios from 'axios'

class Three extends Component {
    constructor() {
        super()
        this._isMounted = false;
        const home = store.getState();
        this.state = {
            name: home.name,
            address: home.address,
            city: home.city,
            state: home.state,
            zip: home.zipcode,
            image: home.image,
            mortgage: home.mortgage,
            rent: home.rent
        }
    }

    componentDidMount() {
        this.unscribe = store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zipcode,
                image: reduxState.image,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        }).bind(this)
        console.log(this.state.image)
    }

    componentWillUnmount() {
        this.unscribe();
    }

    // DONT FORGET TO CREATE THE ACTION CONSTANTS FOR THESE IN STORE!
    handleMortgage = (e) => {
        store.dispatch({
            type: HANDLE_MORTGAGE,
            payload: e.target.value
        })
    }

    handleRent = (e) => {
        store.dispatch({
            type: HANDLE_RENT,
            payload: e.target.value
        })
    }

    precisionThanos = () => {
        store.dispatch({
            type: CLEAR_STATE
        })
    }

    submitToDB() {
        axios.post('/api/house', this.state).then((res) => {
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
                        <input value={this.state.mortgage} type="number" onChange={this.handleImg} placeholder="Mortgage" />
                    </div>
                    <div className="Rent">
                        <h4>Desired Monthly Rent</h4>
                        <input value={this.state.rent} type="number" onChange={this.handleImg} placeholder="Rent" />
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