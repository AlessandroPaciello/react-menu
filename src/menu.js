import React from 'react' 

class Menu extends React.Component {
   
    render() {
        const {index} = this.props
        return <div id='menu' className='menu'>
                <List index={index} menu={this.props.menu}/>
               </div>
    }
}


class List extends React.Component {

    NameMenu = () => {

        const {index, menu} = this.props
        let price_menu = menu.category[index].menu.price
        let description_menu = menu.category[index].menu.Description
        let Name_menu

        Name_menu = menu.category[index].menu.name.map((el, index_map) => {
            if(menu.category[index].menu.Category && menu.category[index].menu.Category.hasOwnProperty(index_map)){
                return (
                    <li key={index_map} className='menu_list_description'>
                    <div className='menu_category'>{menu.category[index].menu.Category[index_map]}</div>
                    <div key={index_map} className='text_list add_category'>
                            <div className='menu_name'>{el}</div>
                            <div className='menu_price'>{price_menu[index_map]}</div>
                        </div>
                    <div className="description_menu add_category">{description_menu[index_map]}</div>
                </li>)
            }
            else{
                return (
                    <li key={index_map} className='menu_list_description'>
                        <div key={index_map} className='text_list'>
                            <div className='menu_name'>{el}</div>
                            <div className='menu_price'>{price_menu[index_map]}</div>
                        </div>
                        <div className="description_menu">{description_menu[index_map]}</div>
                    </li>)
            }

        })
        
        return Name_menu
    }

    render () {
        return (
                <ul id="ul_menu" className='menu'>
                    <this.NameMenu />
                </ul>
        )

    }
}



export default Menu