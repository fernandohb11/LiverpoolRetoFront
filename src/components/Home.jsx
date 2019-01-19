import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  state = {
    info: {
      data:[]
    }
  }
  
  componentDidMount() {
  
    axios.get('http://localhost:3000/product/products',)
      .then(data => {
        this.setState({
          info:data
        })
        .catch(e => console.log(e))
    }) 
  
  
}
  render() {
    console.log(this.state)
    const products = this.state.info.data
    return (
      <div>
        {products.map((element, index) => {
          return <div key={index}>
            <p>{element.photoURL}</p>
            <p>nombre:{element.name}</p>
            <p>precio:{element.price}</p>
          </div>
        })}
        <Link to="/form"><button>Crear nuevo item</button></Link>
      </div>
    )
  
  }
}
