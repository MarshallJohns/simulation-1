import React, { Component } from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.deleteProduct = this.deleteProduct.bind(this)
    }


    deleteProduct(id) {
        Axios.delete(`/api/product/${id}`)
            .catch(err => console.log(err.message))

        this.props.handleInventory()
    }

    render() {
        const products = this.props.inventory.map((product, i) => {
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