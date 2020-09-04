import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { name, price, img } = this.props

        return (
            <div>
                <p>Name: {name}</p>
                <p> Price: {price}</p>
                <img src={img} alt={`${name} image`} />
            </div>
        )
    }
}