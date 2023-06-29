import React from 'react'
import { useState, useEffect } from 'react'
export default function TodoList() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [])
    console.log(data);
    const delHandler = (e) => {
        console.log(e.target.id);
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
        .then((res) => console.log(res.ok))
        const arr = data.filter((ele) => {
            return ele.id !== Number(e.target.id)
        })
        setData(arr)
    }
  return (
    <div>
        {data.map((el,i) => {
            return <p onClick={delHandler} id={el.id} key={el.id}>{i + 1} {el.title}</p>
        })}
    </div>
  )
}
