import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {

    render() {
        const products = this.props.inventory.map((product, i) => {
            return <Product
                key={i}
                name={product.name}
                price={product.price}
                img={product.imgUrl}
            />
        })

        return (
            <div>{products}</div>
        )
    }
}