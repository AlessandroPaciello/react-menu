import React from 'react'
const menu = require('./menu.json')

class Menu extends React.Component {

    NameMenu = () => {

        const {index} = this.props
        let price_menu = menu.category[index].menu.price
        let description_menu = menu.category[index].menu.Description
        let Name_menu

        if(menu.category[index].menu.Description){
            Name_menu = menu.category[index].menu.name.map((el, index) => {
                return (
                    <li key={index} className='menu_list_description'>
                        <div key={index} className='text-list'>
                            <div className='menu_name'>{el}</div>
                            <div className='menu_price'>{price_menu[index]}</div>
                        </div>
                        <div className="description_menu">{description_menu[index]}</div>
                    </li>)
            })
        }
        else{
            Name_menu = menu.category[index].menu.name.map((el, index) => {
                return (
                    <li key={index} className='menu_list'>
                        <div key={index} className='menu_name'>{el}</div>
                        <div className='menu_price'>{price_menu[index]}</div>
                    </li>)
            })
        }
        

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