import React, { useState } from 'react'
import data from './data';
import './Accordian.css'

export const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiSelection, setMultiselection] = useState([]);

  function  handleSingleSelector (getCurrentId){
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }

  function  handleMultiSection (getCurrentId) {
    let copyMultiple = [...multiSelection]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId);
    setMultiselection(copyMultiple);
  }

  console.log(selected,multiSelection);

  return (
    <div className='wrapper'>
    <button onClick={()=> setEnabledMultiSelection (!enableMultiSelection)}> Enable multisitelection</button>
      <div className='accordian'>
        {
          data && data.length > 0 ?
          data.map(dataItem => <div className='item'>
            <div onClick={ enableMultiSelection ? ()=> handleMultiSection (dataItem.id): ()=>handleSingleSelector(dataItem.id)} className='title'>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              enableMultiSelection
              ? multiSelection.indexOf(dataItem.id) !== -1 && (<div className='content'> {dataItem.answer} </div> )
              : selected === dataItem.id && (<div className='content'> {dataItem.answer}</div>)
            }
            {/* {
              selected === dataItem.id || multiSelection.indexOf(dataItem.id) !== -1 
            ?
               <div className='content'>{dataItem.answer}</div>
               :null
            } */}
          </div>)
          :<div>No data found !</div>
        }
      </div>
    </div>
  )
}
