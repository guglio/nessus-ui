import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class HostsInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      filter: '',
    }
  }

  handleSearch = (event) => {
    this.setState({filter : event.target.value});
    this.props.searchData(event.target.value);
  }

  render(){
    const { filter } = this.state;

    return(
      <div>
        <TextField
          placeholder="Search"
          value={filter}
          onChange={(e) => this.handleSearch(e)}
        />
    </div>
    )
  }
}

HostsInput.propTypes = {
  searchData: PropTypes.func.isRequired,
};

export default HostsInput;
