import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'

export default class Home extends Component {
  state = {
    info: {
      data: ['']
    }
  }
  
  componentDidMount() {
  
    axios.get('http://localhost:3000/product/products')
      .then(data => {
        this.setState({
          info: data
        })  
      })
      .catch(e => console.log(e))
  }
  
  deleteProduct = (id) => {
    const link = 'http://localhost:3000/product/products'
  
    var index
   const products = this.state.info.data
    products.forEach(function(element, i) {
      if (element._id === id) {
        index = i
        axios.delete(`${link}/${id}`)
          .then(products => {
           
          }).catch(e => {
            console.log(e)
          })
      }
    })
      products.splice(index,1)
      this.setState({
      info: {
      data:products}})   
  }

  render() {
    const products = this.state.info.data
    return (
      <div>
        <h2>Vista de todos los productos</h2>
        <Link to="/form"><button>Crear nuevo item</button></Link><hr />
        {products.map((element, index) => {
          return <ProductDetail
            deleteProduct={this.deleteProduct}
            key={index} element={element}
            index={index}/>
        })}
      </div>
          )
          }
}
