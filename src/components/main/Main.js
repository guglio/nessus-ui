import React, { Component } from 'react';
import NodesTable from '../nodes-table/NodesTable';
import { getNodes } from '../../services/';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import AlertDialog from '../alert-dialog/AlertDialog';

const NESSUS_NODES = {
  ERROR: "ERROR",
  LOADING: "LOADING",
  READY: "READY"
}

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      nessus_nodes: NESSUS_NODES.LOADING,
      nodes: []
    }
  }

  requestNodes = (n) => {
    getNodes(n)
    .then( result =>
        this.setState({
          nessus_nodes: NESSUS_NODES.READY,
          nodes: result.data.configurations
        })

    )
    .catch( error => {
      if (error.response){
        console.log(error.response.status);
      }
      else if (error.request){
        console.log(error.request);
      }
      else{
        console.log('Error', error.message);
      }
      this.setState({
        nessus_nodes: NESSUS_NODES.ERROR,
        error: error.message
      });
    });
  }

  componentDidMount(){
    this.requestNodes(10000);
  }

  renderError(){
    return(
      <AlertDialog errorText={this.state.error} errorTitle="Unexpected error"/>
    );
  }

  renderTable(){
    return(
      <div>
        <Typography variant="display1" gutterBottom>
          Nodes
        </Typography>
        <NodesTable nodes={this.state.nodes} />
      </div>
    );
  }

  renderLoading(){
    return <CircularProgress />;
  }

  render(){
    const { nessus_nodes } = this.state;
    const { ERROR, LOADING, READY } = NESSUS_NODES;

    switch(nessus_nodes){
      case ERROR: return this.renderError();
      case LOADING: return this.renderLoading();
      case READY: return this.renderTable();
      default: return this.renderLoading();
    }

  }
}

export default Main;
