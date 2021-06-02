import React from 'react'
import backgorund from './img/Background.svg'
import logo from './img/logo-moresco.svg'
import Category from './category'

class Backgorund extends React.Component{

    state = {
        x: 0,
        y: 0,
        height: 0,
        width: 0,
        className: "bgMenu_closed",
        action: false,
        openCategory: false
    }

    StartOpen(e) {
        const {action} = this.state
        let touchX = e.touches[0].clientX
        let touchY = e.touches[0].clientY
        
        if(!action) 
        {
            this.setState({
                x: parseFloat(touchX.toFixed(2)),
                y: parseFloat(touchY.toFixed(2)),
                open: true,
                action : true
            })
            setTimeout(()=> {
                this.setState({
                    x: 0,
                    y: 0,
                    height: "100vh",
                    width: "100%",
                    className: "bgMenu_open"
                })
            }, 200)
            setTimeout(() => {
                this.setState({
                    openCategory : true
                })
            }, 800)
        }
    }
    


    Start = () => {
        
        const {x, y, height, width, className} = this.state
        let style = {
            left: x,
            top: y,
            height: height,
            width: width
        }
        
        return(
            <div className="homePage" onTouchStart={(e)=>this.StartOpen(e)}>
                <div className="elementHome">
                    <img className='logo' src={logo} alt='logo'/>
                    <h2 id="textMenu">Tocca sullo schermo</h2>
                </div>
                <div id="bgMenu" className={className} style={style}></div>
                <div className='backgorund'></div>
                
            </div>
        )
        
    }

    render() {
        const {openCategory} = this.state

        const {x, y, height, width} = this.state
        let style = {
            left: x,
            top: y,
            height: height,
            width: width
        }
        
        return (
            <div>
                {
                    openCategory ? <Category state={this.state} style={style} /> : <this.Start />
                }
            </div>
            
        )
    }
}

export default Backgorund






    






