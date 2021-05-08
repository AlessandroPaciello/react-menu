import React from 'react'
import backgorund from './img/Background.svg'
import logo from './img/logo-moresco.svg'

class SwipeUp extends React.Component {

    state = {
        height : 6,
        bottom : 10,
        startTouch: 0,
        text: "SWIPE-UP"
    }

    Open = () => {
        const {startTouch, text} = this.state
        
        this.setState({
            startTouch: startTouch + 1
        })
        if(startTouch > 20) {
            this.setState({
                text: "ce l'hai fatta"
            })
        }
    }

    TouchEnd = () => {
        this.setState({
            startTouch: 0
        })
    }

    render() {
        const {height, bottom, text} = this.state

        const style = {
            height: height + "vh",
            bottom: bottom + "vh"
        }
        

        return (
            
            
            <div id={"swipe-up"} style={style} className='swipe-up_closed' state={this.state} onTouchMove={this.Open}>
                <p className='swipe-up_text'>{text}</p>
            </div>
        )
    }
}

const Backgorund = () => {
    return(
        <div className='container'>
            <img className='logo' src={logo} alt="logo"/>
            <SwipeUp />
            <img className='backgorund' height={window.screen.height} src={backgorund} alt="background"/>
        </div>
    )
}



export class Cover extends React.Component {

    render() {
        return <Backgorund />
        
    }
}



