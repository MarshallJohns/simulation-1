import React, { Component } from 'react'
import Axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            image_url: ''

        }

        this.addProduct = this.addProduct.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    addProduct() {
        const { name, price, image_url } = this.state
        Axios.post('/api/product', { name, price, image_url })

        this.props.handleInventory()
        this.handleReset()
    }

    handleName(name) {
        this.setState({ name: name })
    }

    handlePrice(price) {
        this.setState({ price: price })
    }

    handleImageUrl(imgUrl) {
        this.setState({ image_url: imgUrl })
    }

    handleReset() {
        this.setState({
            name: '',
            price: 0,
            image_url: ''
        })
    }

    render() {
        const { name, price, image_url } = this.state
        return (
            <div>
                <input value={name} onChange={e => { this.handleName(e.target.value) }} placeholder='Name' />
                <input value={price} onChange={e => { this.handlePrice(e.target.value) }} placeholder='Price' />
                <input value={image_url} onChange={e => { this.handleImageUrl(e.target.value) }} placeholder='Image Url' />
                <button onClick={this.handleReset}>Cancel</button>
                <button onClick={this.addProduct}>Add</button>
            </div>
        )
    }
}