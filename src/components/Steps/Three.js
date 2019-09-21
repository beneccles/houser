import React, { Component } from 'react'
import store, { HANDLE_MORTGAGE, HANDLE_RENT } from '../../store'

class Three extends Component {
    constructor() {
        super()
    }

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

    render() {
        return (
            <div className="stepThree">
                <div className="stepThreeInputs">
                    <div className="Mortgage">
                        <h4>Monthly Mortgage Amount</h4>
                        <input type="text" onChange={this.handleImg} placeholder="Mortgage" />
                    </div>
                    <div className="Rent">
                        <h4>Desired Monthly Rent</h4>
                        <input type="text" onChange={this.handleImg} placeholder="Rent" />
                    </div>
                </div>
                <div className="stepThreeButtons">
                    
                </div>
            </div>
        )
    }
}

export default Three