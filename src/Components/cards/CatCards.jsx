import React from 'react'
import "./CatCards.scss"
import{ Link } from 'react-router-dom'

const CatCards = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='catcards'>
      <img src={item.img} alt="" />
      <span className="desc">{item.description}</span>
      <span className="title">{item.title}</span>
    </div>
    </Link>
  )
}

export default CatCards
