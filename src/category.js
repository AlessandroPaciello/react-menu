import React from 'react'
import Menu from './menu'
import Header from './header'

const menu = require('./menu.json')

class Category extends React.Component {
    
    state = {
        drag: false,
        index: null,
        category: null,
        active: false
    }

    Openlist = (e) => {

        const {drag, active} = this.state

        if(!drag) {

            let list_category = document.getElementById('list')
            let list_menu = document.getElementById('menu')
            let button = document.getElementById('button_category')

            e.target.classList.toggle('active')

            this.setState({
                index: parseInt(e.target.getAttribute('index')),
                category: e.target.getAttribute('category'),
            })

            setTimeout(() =>{
                if(active) {
                    list_menu.classList.toggle('slide_reverse')
                    list_category.classList.toggle('slide_reverse')
                    button.classList.toggle('closed')
                }
                button.classList.toggle('open')
                list_menu.classList.toggle('slide')
                list_category.classList.toggle('slide')

                e.target.classList.toggle('active')
            },200)
        }
    }

    Active = () => {
        this.setState({
            active: true
        })
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

    render() {

        const {state, style} = this.props
        const {index} = this.state
        
        let element = menu.category.map((ob, index) => {
            return (
                <div key={"element" + index} index={index} id={"element" + index} className='list' onTouchEnd={e => this.Openlist(e)}>
                    {ob.nameCategory}
                </div>
                ) 
        })
        
        return (
            <div>
                <Header active={this.Active}/>
                <div className='page'>
                    <Menu index={index}/>
                    <ul id={"list"} onTouchMove={() => this.StartDrag()} onTouchEnd={() => this.EndDrag()}>
                        {element}
                    </ul>
                    <div id="bgMenu" className={state.className} style={style}></div>
                </div>
                
            </div>
        )
    }
}

export default Category
