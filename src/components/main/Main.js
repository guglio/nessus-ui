import React, { Component } from 'react';
import NodesTable from '../nodes-table/NodesTable';
import { getNodes } from '../../services/';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import AlertDialog from '../alert-dialog/AlertDialog';
import NodeInput from '../nodes-input/NodesInput';
import { NESSUS_NODES } from '../../constants/';

import './Main.css';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      nessus_nodes: null,
      nodes: []
    }
  }

  requestNodes = (n) => {
    this.setState({nessus_nodes: NESSUS_NODES.LOADING})
    getNodes(n)
    .then( result =>
        this.setState({
          nessus_nodes: NESSUS_NODES.READY,
          nodes: result.data.configurations
        })
    )
    .catch( error => {
      this.setState({
        nessus_nodes: NESSUS_NODES.ERROR,
        error: error.message
      });
    });
  }

  render(){
    const { ERROR, LOADING, READY } = NESSUS_NODES;
    const { nessus_nodes } = this.state;
    return(
      <div>
        <Typography variant="display1" gutterBottom>
          Nodes
        </Typography>
        <NodeInput requestNodes={this.requestNodes}/>
        {
          nessus_nodes === READY &&
          <NodesTable
            nodes={this.state.nodes}
          />
        }
        {
          nessus_nodes === LOADING &&
          <div className="loadingWrapper">
            <CircularProgress />
          </div>
        }
        {
          nessus_nodes === ERROR &&
          <AlertDialog
            errorText={this.state.error}
            errorTitle="Unexpected error"
          />
        }
      </div>
    )
  }
}

export default Main;
