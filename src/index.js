import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Backgorund from './backgorund'
import Async from 'react-async';

import logo from './img/logo-moresco.svg'
import bg from './img/Background.svg'
import logoHeader from './img/logo-header.svg'
import scrittaHeader from './img/scritta-il-moresco.svg'
import language from './img/language.svg'
import arrow from './img/left-arrow.svg'


const stringImg = {
  logo : logo,
  bg : bg,
  logoHeader : logoHeader,
  scrittaHeader : scrittaHeader,
  language : language,
  arrow : arrow
}

let img = {}

class App extends React.Component {

  state = {
    isLoading : false,
  }

  Loading= () => {

    let index = 0

    for (const [key, value] of Object.entries(stringImg) ) {
      
      
      fetch(value)

      .then(res => {return res.blob()})

      .then((data) => {
        img[key] = URL.createObjectURL(data)
        index ++
      
      if(index === Object.keys(img).length) {
        this.setState({isLoading : true})
        }
      })
    }


  }


  render() {

    return (
      <div>
        {
          this.state.isLoading ? <Backgorund img={img} /> : 
          <div>
            <Loading />
            <Async promiseFn={() => {this.Loading()}}>
              {
                ({data, error, isLoading}) => {
                  if(isLoading){console.log("loading..")}
                }
              }
            </Async>
          </div>
        }
      </div>
    )
  }
}

function Loading() {
  return <p>is loading</p>
}

ReactDOM.render(
  <App />,
document.getElementById('root')
);



