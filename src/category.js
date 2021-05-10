import React from 'react'

 

class Category extends React.Component {
    
    render() {
        const {state, style} = this.props
        return (
            <div>
                <h1 className="titolo">ciao</h1>
                <div id="bgMenu" className={state.className} style={style}></div>
            </div>
        )
    }
}

export default Category