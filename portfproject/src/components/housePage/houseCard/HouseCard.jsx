import React from 'react'
import closeGarage from '../../../pics/HouseIMG/icons8-гараж-закрыт-96.png'
import openGarage from '../../../pics/HouseIMG/icons8-гараж-открыт-96.png'
import offLight from '../../../pics/HouseIMG/icons8-выключить-свет-96.png'
import onLight from '../../../pics/HouseIMG/icons8-включить-свет-96.png'
export default function HouseCard({data,setData,el}) {
    const clickHandler = (e) => {
        const arr = data.filter((ell) => ell.id !== el.id)
        console.log(arr);
        const obj = {
            id: el.id, title: el.title, state: el.state === 'off'?'on':'off', img: el.state === 'off'?
            el.title === 'Light'?onLight:openGarage
            :el.title === 'Light'?offLight:closeGarage
        }
        setData([...arr,obj].sort((a,b) => a.id - b.id))
        
    }
  return (
    <div>
        <div className='houseCard'>
            <h1>{el.title}</h1>
            <img 
            onClick={clickHandler}
            src={el.img} alt=''/>
        </div>
    </div>
  )
}
