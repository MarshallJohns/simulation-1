import React, { Component } from 'react'
import Axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            image_url: '',
            edit: false

        }

        this.addProduct = this.addProduct.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    componentDidMount() {

        let { id } = this.props.match.params
        console.log(id)
        if (id) {
            Axios.get(`/api/product/${id}`).then(res => {

                this.setState({
                    ...res.data[0], edit: true
                })
            })
        }

    }

    componentDidUpdate(prevProps) {
        const { currentProduct } = this.props
        if (currentProduct !== prevProps.currentProduct) {
            this.setState({
                name: currentProduct.name,
                price: currentProduct.price,
                image_url: currentProduct.image_url,
                edit: true

            })
        }
    }

    updateProduct(id) {
        const { name, price, image_url } = this.state
        Axios.put(`/api/product/${id}`, { name, price, image_url }).then(res => {
            this.props.handleInventory()
            this.handleReset()
        }).catch(err => {
            console.log(err.message)
        })


    }

    addProduct() {
        const { name, price, image_url } = this.state
        Axios.post('/api/product', { name, price, image_url }).then(res => {
            this.props.handleInventory()
            this.handleReset()

        }).catch(err => [
            console.log(err.message)
        ])
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
            image_url: '',
            edit: false
        })
    }

    render() {
        const { name, price, image_url } = this.state
        return (
            <div className='form'>
                <div className='input'>
                    <p>Image Url:</p>
                    <input value={image_url} onChange={e => { this.handleImageUrl(e.target.value) }} placeholder='Image Url' />
                </div>
                <div className='input'>
                    <p>Product Name:</p>
                    <input value={name} onChange={e => { this.handleName(e.target.value) }} placeholder='Name' />
                </div>
                <div className='input'>
                    <p>Price: </p>
                    <input value={price} onChange={e => { this.handlePrice(e.target.value) }} placeholder='Price' />
                </div>
                <div className='form-buttons'>
                    <button onClick={this.handleReset}>Cancel</button>
                    <Link to='/'>
                        {this.state.edit ? <button onClick={() => this.updateProduct(this.props.currentProduct.id)}>Save Changes</button> : <button onClick={this.addProduct}>Add Product</button>}
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Form)