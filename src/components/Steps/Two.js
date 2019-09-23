import React, { Component } from 'react'
import store, { HANDLE_IMAGE } from '../../store'

class Two extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image
        }
    }

    componentDidMount() {

        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                image: reduxState.image
            })
        })

    }

    handleInput = (e, fieldName) => {
        this.setState({ [fieldName]: e.target.value})
    }

    handleImage = () => {
        store.dispatch({
            type: HANDLE_IMAGE,
            payload: this.state.image
        })
    }
    render() {
        return (
            <div className="stepTwoImage">
                <h4>Image URL</h4>
                <input type="text" value={this.state.image} onChange={(e) => this.handleInput(e, 'image')} />
                <div className="naviSteps">
                    <button onClick={() => { this.props.history.push('/wizard/one') }}>Back </button>
                    <button onClick={() => {this.handleImage() 
                        this.props.history.push('/wizard/three') }}>Next </button>
                </div>
            </div>
        )
    }
}

export default Two