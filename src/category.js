import React from 'react'
import Header from './header'
import ScrollOut from "scroll-out"

const menu = require('./menu.json')

class Category extends React.Component {
    
    state = {
        drag: false,
        list_open: false
    }

    Openlist = (e) => {

        const {drag, list_open} = this.state
        if(!drag) {
            let list = document.getElementById('list').childNodes

            list.forEach(el => {
                if(e.target === el) {
                    e.target.classList.toggle('list_open')
                    e.target.focus()
                }
                else {
                    el.classList.toggle('hidden')
                    el.classList.toggle('list')
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
                <li data-scroll key={"element" + index} id={"element" + index} className='list' onTouchEnd={e => this.Openlist(e)}>
                    <a href={'/#element' + index}>{ob.nameCategory} </a>
                </li>
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