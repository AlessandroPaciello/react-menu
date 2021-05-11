import React from 'react'
const menu = require('./menu.json')

class Category extends React.Component {
    
    state = {
        drag : false
    }

    Openlist = (e) => {

        const {drag} = this.state

        if(!drag) {
                if(e.target.className === 'list')
            {
                e.target.classList.add('list_open')
                e.target.classList.remove('list')
            }
            else if(e.target.className === 'list_open')
            {
                e.target.classList.add('list')
                e.target.classList.remove('list_open')
            }
        }
        

    }
    StartDrag = () => {
        this.setState({
            drag: true
        })
    }

    EndDrag = () => {
        console.log("end")
        this.setState({
            drag: false
        })
    }

    render() {

        const {state, style} = this.props

        let element = menu.category.map(ob => {
            return (
                <div className='list'  onTouchEnd={e => this.Openlist(e)} >{ob.nameCategory}</div>
                ) 
        })
        
        return (
            <div>
                <div className="header">ciao</div>
                <ul onTouchMove={() => this.StartDrag()} onTouchEnd={() => this.EndDrag()}>
                    {element}
                </ul>
                <div id="bgMenu" className={state.className} style={style}></div>
            </div>
        )
    }
}

export default Category