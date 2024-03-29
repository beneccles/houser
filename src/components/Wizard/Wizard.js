import React, { Component } from 'react'
import One from '../Steps/One'
import Two from '../Steps/Two'
import Three from '../Steps/Three'
import { Link , Route, Switch, withRouter} from 'react-router-dom'
import store from '../../store';

class Wizard extends Component {
    constructor() {
        super()
        const home = store.getState();
        this.state ={
            house: home
        }
    }

    componentDidMount(){
        //Subcribe to store changes
        this.unsubscribe = store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                house: reduxState
            })
        }).bind(this)
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

   




    render() {
        return (
            <div className="wizardBody">
                <div className="wizardHeader">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <div className="wizardRoutes">
                <Switch>
                    <Route exact path="/wizard/one" component={One} />
                    <Route path="/wizard/two" component={Two} />
                    <Route path="/wizard/three" component={Three} />
                </Switch>
                
                </div>
               
               


            </div>
        )
    }
}

export default withRouter(Wizard)