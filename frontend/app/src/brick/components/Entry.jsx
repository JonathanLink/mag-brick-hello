import React, { Component } from 'react'
import Badge from "sq-web-components-core-react/elements/Badge"
import '../assets/styles.css'

class Start extends Component {
    
    componentWillMount() {
        this.props.setBackButton(false)
    }

    render() {
        return (
             <Badge size="large" level="success">Hello World</Badge>
        )
    }
}

export default Start



