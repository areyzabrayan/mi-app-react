import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const listProducts= [
    {
      name:"pasteles",
      quantity:10,
      price: 100000
    },
    {
      name:"postres",
      quantity:5,
      price: 140000
    },
    {
      name:"helados",
      quantity:10,
      price: 50000
    }
  ]
  
  return (
    <div>
      <Link to='/'>Inicio</Link>
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {
            listProducts.map((product, index) =>(                
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products;