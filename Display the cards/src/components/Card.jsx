import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="card border-2 rounded-2xl h-39 w-2xl bg-amber-400 m-2.5">
        <p className="text-amber-900 text-xl">{props.jsoda.title}</p>
        <p>{props.jsoda.body}</p>
      </div>
    </div>
  )
}

export default Card
