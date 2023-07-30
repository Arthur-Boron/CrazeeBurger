import React from 'react'
import { Link, useParams } from 'react-router-dom'

function OrderPage() {

  const {name} = useParams()

  return (
    <div>
      <h1>Bonjour {name}</h1>
      <br />
      <Link to={'/'}>
          <button>Déconnexion</button>
      </Link>
    </div>
    
  )
}

export default OrderPage