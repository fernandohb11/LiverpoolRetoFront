import React from 'react'
const ImageUploader = ({handleImage}) => {
  return (
    <div>
      <h4>Sube la imagen de tu producto</h4>
      <input onChange={handleImage} type="file" name="photoURL"/>
    </div>
  )
}

export default ImageUploader
