import React, { Component } from 'react'
import Button from 'sq-web-components-core-react/forms/Button'
import '../assets/styles.css'
import brick from '../brick.json'

class Entry extends Component {
    
    constructor() {
        super()
        this.state = {buttonTitle: "Change Hello World to Hello You"}
    }

    componentWillMount() {
        this.props.setBackButton(false)
    }

    change = async () => {
        try {
            await fetch("http://" + brick.basePath + "/api/brick/hello/hello", {method: "PUT", body: JSON.stringify({content: "Hello You"})})
            this.setState({buttonTitle: "The change has been done!"})
        } catch (err) {
            this.setState({buttonTitle: "An error occurred :("})
        }
    }

    render() {
        return (
            <Button level="success" onClick={ () => this.change() }>{this.state.buttonTitle}</Button>
        )
    }

}

export default Entry



