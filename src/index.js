import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Backgorund from './backgorund'
import Async from 'react-async';

import logo from './img/logo-moresco.svg'
import bg from './img/Background.svg'


const img = [
  logo,
  bg
]


class App extends React.Component {

  state = {
    isLoading : false,
  }

  Loading= () => {


    img.map((el, index) => {
      fetch(el)
      .then(res => {return res.blob()})
      .then(data => {
      console.log(data)
      if(index + 1 === img.length) {
        this.setState({isLoading : true})
      }
      })
    })
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



