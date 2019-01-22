import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import firebase from '../services/firebase'
import { Alert } from 'antd';

export default class Form extends Component {

  state = {
    product: {}
    
  }
  handleChange = (e)=>{
    const {product} = this.state
    const field = e.target.name
    product[field] = e.target.value
    this.setState({ product })
  }
  createProduct = (e) =>{
    e.preventDefault()
    const {product} = this.state
    const task = firebase.storage().ref('chelas').child(product.photo.name).put(product.photo)
    return task
        .then(snap=>snap.ref.getDownloadURL())
      .then(link => {
        product.photoURL = link
        axios.post('http://localhost:3000/product/new',product)
        .then(r=> r.data)
        .catch(e=> e.response)
        })
  }

  handleImage = (e) => {
    const file = e.target.files[0]
    const { product } = this.state
    product.photo = file
    this.setState(product)
  }

  render() {
    const {handleChange} = this
    return (
      <div style={{ backgroundColor: "#f5f5f5", marginTop: "0px", display:'flex' }}>
        <div className="form-detail">
          <h1>Subir los datos de un producto nuevo</h1>
        <form onSubmit={this.createProduct}>
        <input onChange={this.handleImage} type="file" name="photoURL"/>
       
        <br/><hr/> <input type='text' name='name'
          placeholder='Nombre del producto'
              onChange={handleChange}></input>
            <br/><hr/>
        <input type='text' name='price'
          placeholder='Precio del producto'
              onChange={handleChange}></input>
            <br/><hr/>
            <button onClick={Alert} type="submit">Submit</button>
          </form>
          <br/><hr/>
        <Link to="/">
          <button>Regresar a todos los items</button>
        </Link>
      </div></div>
    )
  }
}
