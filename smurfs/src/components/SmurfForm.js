import React from 'react';
import { addSmurfs } from '../actions/index';
import { connect } from 'react-redux';


class SmurfForm extends React.Component {
    
    state = {
       
        name: '',
        age: '',
        height: ''
    }

    addSmurf = e => {
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
              }
            this.props.addSmurfs(newSmurf)
              }

    handleChanges = e => {
        this.setState({
        [e.target.name]: e.target.value
        })
        }
            
            
            
        
    
    
    render() {
        
    return ( 
        <div>
            <form >
                <input 
                
                onChange={this.handleChanges}
                value={this.state.name}
                placeholder='name'
                name='name'
                type='text'
                
                />
                <input 
                onChange={this.handleChanges}
                value={this.state.age}
                placeholder='age'
                name='age'
                type='text'
                />
                <input 
                
                onChange={this.handleChanges}
                value={this.state.height}
                placeholder='height'
                name='height'
                type='text'
                />
            </form>
            <button onClick={this.addSmurf}>Add Smurf</button>
        </div>
     );
    }
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf
    }
    
}


export default connect(mapStateToProps ,{addSmurfs}) (SmurfForm);