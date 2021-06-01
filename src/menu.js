import React from 'react'
const menu = require('./menu.json')

class Menu extends React.Component {

    NameMenu = () => {

        const {index} = this.props
        let Price_menu = menu.category[index].menu.price
        let Name_menu = menu.category[index].menu.name.map((el, index) => {
            return (
                <li key={index} className='menu_list'>
                    <div key={index} className='menu_name'>{el}</div>
                    <div className='menu_price'>{Price_menu[index]}</div>
                </li>)
        })

        return Name_menu
    }

    LoadMenu = () => {
        const {index} = this.props

        if(index !== null){

            return (
                <ul id="ul_menu" className='menu'>
                    <this.NameMenu />
                </ul>)
        }
        else{
            return <ul className='menu'></ul>
        }
    }

    render() {

        return <div id='menu' className='menu'>
                <this.LoadMenu />
               </div>
    }
}


export default Menu