import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgUrl: ''

        }


    }

    handleName(name) {
        this.setState({ name: name })
    }

    handlePrice(price) {
        this.setState({ price: price })
    }

    handleImageUrl(imgUrl) {
        this.setState({ imgUrl: imgUrl })
    }

    handleCancel() {
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }

    render() {
        return (
            <div>
                <input onChange={e => { this.handleName(e.target.value) }} placeholder='Name' />
                <input onChange={e => { this.handlePrice(e.target.value) }} placeholder='Price' />
                <input onChange={e => { this.handleImageUrl(e.target.value) }} placeholder='Image Url' />
                <button onClick={this.handleCancel}>Cancel</button>
                <button>Add</button>
            </div>
        )
    }
}