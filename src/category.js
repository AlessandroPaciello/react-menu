import React from 'react'

const menu = require('./menu.json')


const menuList = [];




class Category extends React.Component {
    
    render() {
        menu.category.forEach(element => {return <h1 className='category'>{element.voce1}</h1>
    });
        return ""
    }
}

export default Category