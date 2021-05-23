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

        const {drag} = this.state

        if(!drag) {
            let list_category = document.getElementById('list')
            let list_menu = document.getElementById('menu')

            e.target.classList.toggle('active')

            list_menu.classList.toggle('menu_closed')
            list_menu.classList.toggle('menu_open')
        
            this.setState({
                index: parseInt(e.target.getAttribute('index')),
                category: e.target.getAttribute('category'),
                active: true
            })

            setTimeout(() =>{
                list_menu.classList.toggle('slide')
                list_category.classList.toggle('slide')
            },200)
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
                <Header />
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
