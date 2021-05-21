import React from 'react'
import Header from './header'
import 'animate.css'
import ScrollOut from "scroll-out"


const menu = require('./menu.json')

class Category extends React.Component {
    
    state = {
        drag: false
    }

    Openlist = (e) => {

        const {drag} = this.state
        if(!drag) {
            let list = document.getElementById('list').childNodes

            list.forEach(el => {
                if(e.target === el) {
                    e.target.classList.toggle('list_open')
                }
                else {
                    el.classList.toggle('animate__zoomOutLeft')
                    el.classList.toggle('animate__zoomIn')
                }
            })
        }
    }

    StartDrag = () => {
        this.setState({
            drag: true,
        })
    }

    EndDrag = () => {
        this.setState({
            drag: false
        })
    }

    componentDidMount() {
        ScrollOut({
            scrollingElement: ".scrollable-pane",
            threshold: 0.95,
            onShown: function(el) {
                // use the web animation API
                el.animate([{ opacity: 0 }, { opacity: 1 }], 500);
              },
        })
    }

    render() {

        const {state, style} = this.props

        
        let element = menu.category.map((ob, index) => {
            return (
                <div data-scroll key={"element" + index} id={"element" + index} className='list animate__animated animate__zoomIn' onTouchEnd={e => this.Openlist(e)}>
                    {ob.nameCategory}
                </div>
                ) 
        })
        
        return (
            <div>
                <Header />
                <div className='page'>
                    
                        <ul id={"list"} className='scrollable-pane' onTouchMove={() => this.StartDrag()} onTouchEnd={() => this.EndDrag()}>
                            {element}
                        </ul>
                    <div id="bgMenu" className={state.className} style={style}></div>
                </div>
            </div>
        )
    }
}

export default Category