import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Backgorund from './backgorund'
import Async from 'react-async';

import logo from './img/logo-moresco.svg'
import bg from './img/Background.svg'



class App extends React.Component {

  state = {
    isLoading : false,
    logo : ""
  }

  Loading= () => {

    let count = 0
    
    fetch(logo)
    .then(res => {return res.blob()})
    .then(data => {
      count = count + 1
      console.log(count)})

    fetch(bg)
    .then(res => {return res.blob()})
    .then(data => {
      count = count + 1
      console.log(count)})

      return count
  }


  render() {

    

    return (
      <div>
        {
          this.state.isLoading ? <Backgorund /> : 
          <div>
            <Async promiseFn={() => {this.Loading()}}>
              {
                ({data, error, isLoading}) => {
                  if(isLoading){console.log("loading..")}

                  if(error) {}
                  
                  if(data) {
                      return <div className="isloading"></div>
                  }
                }
              }
            </Async>
          </div>
        }
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
document.getElementById('root')
);



