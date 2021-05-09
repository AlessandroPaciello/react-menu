import React from 'react'
import backgorund from './img/Background.svg'
import logo from './img/logo-moresco.svg'
import SwipeUp from './swipe-up'
import Category from './category'

class Backgorund extends React.Component{

    state = {
        startTouch: 0,
        className: 'swipe-up_closed',
        open: false
    }

    open = () =>{
        const {startTouch} = this.state

        if(startTouch < 5) {
            this.setState({
                startTouch: startTouch + 0.5
            })
        }
        else {
            this.setState({
                className: 'swipe-up_open',
                open: true
            })
        }
        
    }

    Home = () => {
        const state = this.state


        if(!state.open) {
            return(
                <div className='container'>
                    <img className='logo' src={logo} alt='logo'/>
                    <SwipeUp state={state} open={() => {this.open()}}/>
                    <img className='backgorund' height={window.screen.height} src={backgorund} alt='background'/>
                </div>
            )
        }
        else {
            return(
                <div className='container'>
                    <img className='logo' src={logo} alt='logo'/>
                    <SwipeUp state={state} open={() => {this.open()}}/>
                    <Category />
                    <img className='backgorund' height={window.screen.height} src={backgorund} alt='background'/>
                </div>
            )

        }
        
    }

    render() {

        return (
            <this.Home />
        )
    }
}

export default Backgorund






    






