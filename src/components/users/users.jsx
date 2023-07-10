import React from 'react'

const Users = () => {
    const userList= [
        {
            name:"Gabriel",
            document: 154934659,
            celphone:301452787
        },
        {
            name:"Sofia",
            document: 17843456,
            celphone:3064376987
        },
        {
            name:"Pedro",
            document: 1245794,
            celphone:3016576
        }
    ]
    return (
  
    <div>
        <h2>Usuarios</h2>
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
        {
            userList.map((user, index) =>(                
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.document}</td>
                  <td>{user.celphone}</td>
                </tr>
            ))
          }
        </tbody>

        </table>
    </div>
  )
}

export default Users