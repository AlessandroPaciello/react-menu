import React from 'react'
const menu = require('./menu.json')

class Menu extends React.Component {


    LoadMenu = () => {
        const {index} = this.props

        if(index !== null){
            let menu_list= menu.category[index].menu.map((ob, index) => {
               return (<li key={index} className='menu_list'>{ob}</li>)
            })

            return <ul>{menu_list}</ul>
        }
        else{
            return <div></div>
        }
    }

    render() {

        return <div id='menu' className='menu_closed'>
                <this.LoadMenu />
               </div>
    }
}


export default Menu