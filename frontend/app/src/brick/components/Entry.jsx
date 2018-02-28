import React, { Component } from 'react'
import Heading from "sq-web-components-core-react/elements/Heading"
import '../assets/styles.css'
import brick from '../brick.json'

class Start extends Component {
    
    constructor() {
        super()
        this.state = { content: "" }
    }

    componentWillMount() {
        this.props.setBackButton(false)
    }

    async componentDidMount() {
        try {
            let message = await fetch("http://" + brick.basePath + "/api/brick/hello/hello")
            message = await message.json()
            console.log(message)
            this.setState({content: message.content})
        } catch(err) {
            this.setState({content: "Error"})
        }
    }

    render() {
        return (
             <Heading size="large">{ this.state.content }</Heading>
        )
    }
}

export default Start



