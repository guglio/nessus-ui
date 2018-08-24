import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class NodesInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      nodesNumber: 2
    }
  }

  componentDidMount(){
    this.props.requestNodes(this.state.nodesNumber);
  }

  handleChange = (event) => {
      this.setState({nodesNumber : event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.requestNodes(this.state.nodesNumber);
  }

  render(){
    const { nodesNumber } = this.state;

    return(
      <form noValidate autoComplete="off" onSubmit={(e) => this.handleSubmit(e)}>
        <TextField
          label="Nodes number"
          placeholder="2"
          value={nodesNumber}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
    )
  }
}

NodesInput.propTypes = {
  requestNodes: PropTypes.func.isRequired,
};

export default NodesInput;
