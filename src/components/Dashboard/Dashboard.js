import React, { Component } from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            inventory: [],
        }
        this.handleInventory = this.handleInventory.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        this.handleInventory()
    }

    componentDidUpdate(prevProps) {
        const { inventory } = this.state
        if (inventory !== prevProps.inventory) {
            this.handleInventory()
        }

    }


    deleteProduct(id) {
        Axios.delete(`/api/product/${id}`).then(res => {
            this.handleInventory()
        })
            .catch(err => console.log(err.message))

    }

    handleInventory() {
        Axios.get('/api/inventory')
            .then(res => this.setState({ inventory: res.data }))
            .catch(err => console.log(err.message))
    }

    render() {
        const products = this.state.inventory.map((product, i) => {
            return <Product
                handleEdit={this.props.handleEdit}
                deleteProduct={this.deleteProduct}
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.image_url}
                product={product}
            />
        })

        return (
            <div className='products'>{products}</div>
        )
    }
}