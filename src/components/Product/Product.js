import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { name, price, img } = this.props

        return (
            <div className='product'>
                <img src={img} alt={`${name}`} />
                <p>Name: {name}</p>
                <p> Price: {price}</p>
            </div>
        )
    }
}