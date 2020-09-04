import React, { Component } from 'react'
import Product from '../Product/Product'
import Axios from 'axios'

export default class Dashboard extends Component {

    deleteProduct(id) {
        Axios.delete(`/api/product/${id}`).then(res => {
        })
        this.props.handleInventory()

    }

    render() {
        const products = this.props.inventory.map((product, i) => {
            return <Product
                deleteProduct={this.deleteProduct}
                key={product.id}
                name={product.name}
                price={product.price}
                img={product.image_url}
            />
        })

        return (
            <div className='products'>{products}</div>
        )
    }
}