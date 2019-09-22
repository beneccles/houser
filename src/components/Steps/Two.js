import React, { Component } from 'react'
import store, {HANDLE_IMAGE} from '../../store'

class Two extends Component {
        constructor() {
            super()
            this.textInput = React.createRef();
            const home = store.getState()
            this.state ={
                image: home.image
            }
        }

        componentDidMount(){

            store.subscribe(() => {
                const reduxState = store.getState()
                this.setState({
                    image: reduxState.image
                })
            })

        }

 

        handleImg = (e) => {
            store.dispatch({
                type: HANDLE_IMAGE,
                payload: e.target.value
            })
        }
        render() {
            return (
                <div className="stepTwoImage">
                    <h4>Image URL</h4>
                    <input type="text" ref={this.textInput} defaultvalue={this.state.image} onChange={(e) => this.handleImg(e)} />
                    <div className="naviSteps">
                    <button onClick={() => {this.props.history.push('/wizard/one')}}>Back </button>
                    <button onClick={() => {this.props.history.push('/wizard/three')}}>Next </button>
                    </div>
                </div>
            )
        }
}

export default Two