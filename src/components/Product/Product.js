import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { name, price, img, id, deleteProduct } = this.props

        return (
            <div className='product'>
                <img src={img} alt={`${name}`} />
                <p>Name: {name}</p>
                <p> Price: {price}</p>
                <button onClick={() => deleteProduct(id)}>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}