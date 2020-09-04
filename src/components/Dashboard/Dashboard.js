import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {

    render() {
        const products = this.props.inventory.map((product, i) => {
            return <Product
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