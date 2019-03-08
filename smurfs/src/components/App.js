import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions/index';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  state = {
    name: '',
    age: '',
    height: ''
  }


  componentDidMount() {
    this.props.getSmurfs()
    
  }


  render() {
    
    return (
      
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {this.props.smurfs.map(smurf => {
          return (
            <div>
            {smurf.name} {" "}
            {smurf.age}{" "}Y.O. {" "}
            {smurf.height}
            </div>
          )
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {getSmurfs}) (App);
