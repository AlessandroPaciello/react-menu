import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Backgorund from './backgorund'



class App extends React.Component {
  render() {
    return <Backgorund/>
  }
}
ReactDOM.render(
  <App />,
document.getElementById('root')
);

