import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import config from '../../config.json';

const styles = theme => ({
  button: {
    marginLeft: '3em',
    marginRight: '3em',
  },
  configList: {
    marginBottom: '1em',
    marginTop: '1em'
  },
  form: {
    marginTop:'2em'
  },
  title:{
    marginBottom:'1em'
  }
});

class Request extends Component{
  constructor(props){
    super(props);
    this.state = {
      hostsNumber: this.props.hostsNumber,
    }
  }

  handleChange = (event) => {
      this.setState({hostsNumber : event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleChangeHosts({
      hostsNumber : this.state.hostsNumber,
      activeView:'main'
    });
  }

  handleClick = () => {
    this.props.handleChangeHosts({
      hostsNumber : this.state.hostsNumber,
      activeView:'main'
    });
  }

  render(){
    const { hostsNumber } = this.state;
    const { classes } = this.props;

    return(
      <div>
        <Typography
          variant="display1"
          gutterBottom
          className={classes.title}
        >
          Request
        </Typography>
        <Typography
          component="p"
          gutterBottom
        >
          Below you can change the number of host(s) to request to the server. By default the number of hosts requested are 2.
        </Typography>
        <Typography component="p" className={classes.configList}>
          <strong>Host(s) requested</strong>: {hostsNumber}
        </Typography>
        <Typography component="p" className={classes.configList}>
          <strong>Current API url</strong>: {config.APIurl}{hostsNumber}
        </Typography>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <TextField
            label="Hosts number"
            placeholder="Hosts"
            value={hostsNumber}
            onChange={(e) => this.handleChange(e)}
          />
          <Button
            variant="contained"
            onClick={() => this.handleClick()}
            className={classes.button}
          >
            Request hosts
          </Button>
        </form>
      </div>
    )
  }
}

Request.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangeHosts: PropTypes.func.isRequired,
  hostsNumber: PropTypes.number.isRequired,
}

export default withStyles(styles)(Request);
