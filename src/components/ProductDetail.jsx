import React from 'react'


function ProductDetail({ element, index, deleteProduct }) {
  return (

    <div key={index}>
      
       <div style={{ backgroundColor: "#f5f5f5", marginTop: "0px", display:'flex' }}>
        <ul style={{ listStyle: 'none' }}>
          <button onClick={() => {
            deleteProduct(element._id)
          }}>borrar</button>
          {/* <button onClick={updateProduct}>update</button> */}
          <li><img width='100px' alt='imagenProducto' src={element.photoURL} /> </li>
          <li>{element._id}</li>
            <li>Nombre: {element.name}</li>
            <li>Precio: ${element.price}</li>
      </ul>
    
    </div>  </div>
  )
}

export default ProductDetail
