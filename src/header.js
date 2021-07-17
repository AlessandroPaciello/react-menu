import React from 'react'


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
            document.getElementById("ul_menu").scrollTop = 0;
            active()
        },200)
    }

    render() {

        return <header id={"header"} className="header">
                    <div id='button_category' className='button_category' style={{backgroundImage: `url(${this.props.img.arrow})`}} onTouchEnd={() => {this.GoBack()}}></div>
                    <Language language={this.props.language} menu_it={this.props.menu_it} menu_en={this.props.menu_en} img={this.props.img}/>
                    <div className="box_logo">
                        <img className='logo_header' src={this.props.img.logoHeader}></img>
                        <img className='scritta_header' src={this.props.img.scrittaHeader}></img>
                        
                    </div>
                    
                </header>
    }
}

class Language extends React.Component {

    state = {
        show : false
    }

    SelectLanguage = (e) => {

        const {show} = this.state
        let button = document.getElementById('button_language')
        if (e.target.id === "language_it") {
            this.props.language(this.props.menu_it)
        }
        else if (e.target.id === "language_en") {
            this.props.language(this.props.menu_en)
        }
        button.classList.toggle('button_language-open')
        button.classList.toggle('button_language-closed')
        this.setState({
            show: !show
        })
    }

    render() {

        const {show} = this.state

        return (<div id='button_language' className="button_language button_language-closed" style={{backgroundImage: `url(${this.props.img.language})`}} onTouchEnd={(e) => {this.SelectLanguage(e)}}>
                      {
                          show ? <ListLanguage /> : <div> </div>
                      }
                </div>
        )
    }
}

function ListLanguage() {
     
    return (<ul className='button_language_text'>
    <li id="language_it" className="text">IT</li>
    <li id="language_en" className="text">EN</li>
</ul>)
}

export default Header