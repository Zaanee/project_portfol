import React from 'react'
import './HousePage.css'
import HouseCard from './houseCard/HouseCard'
import { useState } from 'react'
import closeGarage from '../../pics/HouseIMG/icons8-гараж-закрыт-96.png'
import offLight from '../../pics/HouseIMG/icons8-выключить-свет-96.png'
import AddForm from '../addForm/AddForm'

export default function HousePage() {
    const [data, setData] = useState([
        {id: 0, title: 'Garage', state: 'off', img: closeGarage},
        {id: 1, title: 'Light', state: 'off', img: offLight}
    ])
    const [add, setAdd] = useState(false)
    const clickHandler = () => {
        setAdd(!add)
    }
  return (
    <>
    <button onClick={clickHandler}>Добавить устройство</button>
    {add?<AddForm setAdd={setAdd} setData={setData} data={data}/> : <div style={{padding: '30px'}} className={`container ${data[1].state === 'off'?null:'nightmode'}`}>
        {data.map((el)=> {
            return <HouseCard el={el} setData={setData} data={data}/>
        })}
        
    </div>}
    </>
  )
}
