import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';



class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     nodes: []
  //   }
  // }

  // requestNodes = (n) => {
  //   getNodes(n)
  //   .then( result => {
  //       this.setState({
  //         isLoaded: true,
  //         nodes: result.data.configurations
  //       });}
  //
  //   )
  //   .catch( error => {
  //       // Error
  //
  //       if (error.response) {
  //           // The request was made and the server responded with a status code
  //           // that falls out of the range of 2xx
  //           // console.log(error.response.data);
  //           console.log(error.response.status);
  //           // console.log(error.response.headers);
  //       } else if (error.request) {
  //           // The request was made but no response was received
  //           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //           // http.ClientRequest in node.js
  //           console.log(error.request);
  //       } else {
  //           // Something happened in setting up the request that triggered an Error
  //           console.log('Error', error.message);
  //       }
  //       console.log(error.config);
  //     this.setState({
  //       isLoaded: true,
  //       error: error.message
  //     });
  //   });
  // }

  // componentDidMount(){
  //   this.requestNodes(1000);
  // }


  render() {
    // const { nodes, error, isLoaded } = this.state;
    return (
      <div className="Nessus">
        <Header />
        <Main className="App-intro"/>
      </div>
    );
  }
}

export default App;
