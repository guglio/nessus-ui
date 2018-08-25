import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import { getHosts } from '../services/';

import AlertDialog from './AlertDialog';
import HostsInput from './HostsInput';
import HostsTable from './HostsTable';

import { NESSUS_HOSTS, ERROR } from '../constants/';

const styles = theme => ({
  loadingWrapper: {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 20px)',
  },
  title:{
    marginBottom:'1em'
  }
});



class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      nessus_hosts: null,
      hosts: [],
      initialHosts: [],
    }
  }

  componentDidMount(){
    this.requestHosts(this.props.hostsNumber);
  }

  searchData = (filter) => {
    if(filter && filter !== ''){
      let hosts = this.state.initialHosts.filter( host => {
        let hostString = Object.values(host).join('').toLowerCase();
        return hostString.indexOf(filter.toLowerCase()) > -1
      });
      this.setState({hosts});
    }
    else{
      this.setState({hosts : this.state.initialHosts});
    }
  }

  requestHosts = (n) => {
    this.setState({nessus_hosts: NESSUS_HOSTS.LOADING})
    getHosts(n)
    .then( result =>
        this.setState({
          nessus_hosts: NESSUS_HOSTS.READY,
          hosts: result.data.configurations,
          initialHosts: result.data.configurations
        })
    )
    .catch( error => {
      const errorCode = error.status ? error.response.status : 503;
      this.setState({
        nessus_hosts: NESSUS_HOSTS.ERROR,
        error: ERROR[errorCode] ? ERROR[errorCode] : ERROR.DEFAULT
      });
    });
  }

  render(){
    const { ERROR, LOADING, READY } = NESSUS_HOSTS;
    const { nessus_hosts, error, hosts } = this.state;
    const { classes } = this.props;

    return(
      <div>
        <Typography
          variant="display1"
          gutterBottom
          className={classes.title}
        >
          Hosts
        </Typography>
        <HostsInput
          searchData={this.searchData}
        />
        {
          nessus_hosts === READY &&
          <HostsTable
            hosts={hosts}
          />
        }
        {
          nessus_hosts === LOADING &&
          <div className={classes.loadingWrapper}>
            <CircularProgress />
          </div>
        }
        {
          nessus_hosts === ERROR &&
          <AlertDialog
            errorText={error}
            errorTitle="Oops! Something went wrong."
          />
        }

      </div>
    )
  }
}
Main.propTypes = {
  classes: PropTypes.object.isRequired,
  hostsNumber: PropTypes.number.isRequired,
};


export default withStyles(styles)(Main);
