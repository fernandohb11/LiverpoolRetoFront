import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageUploader from './ImageUploader'
import axios from 'axios';

const link = 'http://localhost:3000/product/';
export default class Form extends Component {

  state = {
    product: {}  
  }
  handleChange = (e)=>{
    const {product} = this.state
    const field = e.target.name
    product[field] = e.target.value
    this.setState({ product })
    console.log(this.state)
  }
  createProduct = (e) =>{
    e.preventDefault()
    const {product} = this.state
    console.log(product)
   axios.post(`${link}/new`,product)
        .then(r=> r.data)
        .catch(e=> e.response)
  }
  

  render() {
    const {handleChange} = this
    return (
      <div>
        <form onSubmit={this.createProduct}>
         <ImageUploader/>
        <input type='text' name='name'
          placeholder='nombre del producto'
          onChange={handleChange}></input>
        <input type='text' name='price'
          placeholder='precio del producto'
            onChange={handleChange}></input>
         <button type="submit">Submit</button>
        </form>
        <Link to="/">
          <button>Regresar a todos los items</button>
        </Link>
      </div>
    )
  }
}
