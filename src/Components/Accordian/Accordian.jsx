import React, { useState } from 'react'
import data from './data';
import './Accordian.css'

export const Accordian = () => {

  const [selected, setSelected] = useState(null);

  function  handleSingleSelector (getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }

  return (
    <div className='wrapper'>
    <button> Enable multisgitelection</button>
      <div className='accordian'>
        {
          data && data.length > 0 ?
          data.map(dataItem => <div className='item'>
            <div onClick={()=>handleSingleSelector(dataItem.id)} className='title'>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ?
               <div className='content'>{dataItem.answer}</div>
               :null
            }
          </div>)
          :<div>No data found !</div>
        }
      </div>
    </div>
  )
}
