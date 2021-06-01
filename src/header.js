import React from 'react'
import Logo from './img/logo-header.svg'
import Scritta from './img/scritta-il-moresco.svg'

class Header extends React.Component {

    GoBack = () => {

        const {active} = this.props
        let list_category = document.getElementById('list')
        let list_menu = document.getElementById('menu')
        let button = document.getElementById('button_category')

        button.classList.toggle('open')
        button.classList.toggle('closed')

        setTimeout(() =>{
            list_menu.classList.toggle('slide')
            list_category.classList.toggle('slide')
            list_menu.classList.toggle('slide_reverse')
            list_category.classList.toggle('slide_reverse')
        
            active()
        },200)
    }



    render() {

        return <header id={"header"} className="header">
                    <div id='button_category' className='button_category' onTouchEnd={() => {this.GoBack()}}></div>
                    <div className="box_logo">
                        <img className='logo_header' src={Logo}></img>
                        <img className='scritta_header' src={Scritta}></img>
                    </div>
                </header>
    }
}

export default Header