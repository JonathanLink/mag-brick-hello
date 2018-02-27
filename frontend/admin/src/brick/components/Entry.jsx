import React, { Component } from 'react'
import Button from 'sq-web-components-core-react/forms/Button'
import '../assets/styles.css'

class Entry extends Component {
    
    componentWillMount() {
        this.props.setBackButton(false)
    }

    render() {
        return (
            <Button level="success">Change Hello World! to Hello You!</Button>
        )
    }

}

export default Entry



