import React from 'react'
import Header from './header'
import ScrollOut from "scroll-out"

const menu = require('./menu.json')

class Category extends React.Component {
    
    state = {
        drag : false,
    }

    Openlist = (e) => {

        const {drag} = this.state
        if(!drag) {
            if(e.target.className === 'list')
            {
                e.target.classList.add('list_open')
                e.target.classList.remove('list')
            }
            else if(e.target.className === 'list_open')
            {
                e.target.classList.add('list')
                e.target.classList.remove('list_open')
            }
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
        })
    }

    render() {

        const {state, style} = this.props

        
        let element = menu.category.map((ob, index) => {
            return (
                <div data-scroll
                    key={"element" + index} 
                    id={"element" + index} 
                    className='list' 
                    onTouchEnd={e => this.Openlist(e)}>
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