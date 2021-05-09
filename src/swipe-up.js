import React from 'react'

export default class SwipeUp extends React.Component {


    render() {
        const {className} = this.props.state
        const {open} = this.props
        
        return (
            <div id={'swipe-up'} className={className} onTouchMove={open}>
                <h3 className='swipe-up_text'>SWIPE-UP</h3>
            </div>
        )
    }
}

