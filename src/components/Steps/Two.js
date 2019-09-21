import React, { Component } from 'react'
import store, {HANDLE_IMG} from '../../store'

class Two extends Component {
        constructor() {
            super()
        }

        handleImg = (e) => {
            store.dispatch({
                type: HANDLE_IMG,
                payload: e.target.value
            })
        }
        render() {
            return (
                <div className="stepTwoImage">
                    <div id="stepTwoInput">
                    <h4>Image URL</h4>
                    <input type="text" onChange={this.handleImg} placeholder="name" />
                    </div>
                    <div className="naviSteps">
                        
                    </div>
                </div>
            )
        }
}

export default Two