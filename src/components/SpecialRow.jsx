import React from 'react'
import './SpecialRow.css'
const SpecialRow = ({ image, title, description, reverse }) => {
  return (
    <div className={reverse ? 'item reverse' : 'item'}>
        <div className='item-text'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

        <div className='item-image'>
            <img src={image} alt={title} />
        </div>
    </div>
  )
}

export default SpecialRow
