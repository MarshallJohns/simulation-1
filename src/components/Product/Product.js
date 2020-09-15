import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Product extends Component {
    render() {
        const { name, price, img, id, deleteProduct, product } = this.props

        return (
            <div className='product'>
                <img src={img} alt={`${name}`} />
                <p>Name: {name}</p>
                <p> Price: {price}</p>
                <div className='btns'>
                    <button onClick={() => deleteProduct(id)}>Delete</button>
                    <button onClick={() => this.props.history.push(`/edit/${product.id}`)}>Edit</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Product)
