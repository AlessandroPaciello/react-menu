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


  constructor() {
    super()
    this.state = {
      start: false,
      isLoading : false,
      progress: 0
    }
    this.percentage = 0
    this.progress = 0
  }
  
  Loading = () => {

      for (const [key, value] of Object.entries(stringImg) ) {
      
        fetch(value)
  
        .then(res => {return res.blob()})
  
        .then((data) => {
          img[key] = URL.createObjectURL(data)
          this.progress ++
          this.percentage = parseInt((this.progress * 40) / Object.keys(stringImg).length) 
          this.setState({progress : this.percentage})

        if(this.progress === Object.keys(stringImg).length) {
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
            <Loading progress={this.state.progress}/>
            <Async promiseFn={() => {this.Loading()}}>
            </Async>
          </div>
        }
      </div>
    )
  }
}

class Loading extends React.Component {



  render() {
    return <div className="container_loadingBar">
            <div className="loadingBar">
              <div className="progress" style={{width : this.props.progress + "vh"}}></div>
            </div>
         </div>
  }
  
    
}

ReactDOM.render(
  <App />,
document.getElementById('root')
);



