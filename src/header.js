import React from 'react'
import Logo from './img/logo-header.svg'
import Scritta from './img/scritta-il-moresco.svg'

class Header extends React.Component {

    render() {
        return <header id={"header"} className="header">
                    <img className='logo_header' src={Logo}></img>
                    <img className='scritta_header' src={Scritta}></img>
                </header>
    }
}

export default Header