import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Cover} from './backgorund'


class App extends React.Component {
  render() {
    return(
      <Cover/>
    ) 
  }
}





ReactDOM.render(
  <App />,
document.getElementById('root')
);

