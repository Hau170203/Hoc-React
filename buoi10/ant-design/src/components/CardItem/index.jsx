import React from 'react';
import './CardItem.css';

export default function CardItem(pros) {
    const { title, style } = pros;
  return (
    <>
    <div className="card-item" style={style}>
    {title && ( <h4 >{title}</h4>)}
    </div>
    </>
  )
}
