import React from 'react'
import closeGarage from '../../pics/HouseIMG/icons8-гараж-закрыт-96.png'
export default function AddForm({data,setData,setAdd}) {
    const subHandler = (e) => {
        e.preventDefault();
        const obj = {
            id: data.length+1,
            title: e.target[0].value,
            state: 'off',
            img: closeGarage,
        }
        setData([...data, obj,])
        setAdd(false)
    }
  return (
    <div>
        <form onSubmit={subHandler}>
            <input type="text" />
            <button>Add item</button>
        </form>
    </div>
  )
}
