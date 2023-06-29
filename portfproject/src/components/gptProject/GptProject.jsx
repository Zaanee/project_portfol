import React from 'react'
import './GptProject.css'
import { useState } from 'react'
import { Spin } from 'antd'
export default function GptProject() {
    const [value, setValue] = useState('')
    const [spin, setSpin] = useState(false)
    const subHandler = (e) => {
        e.preventDefault()
        setSpin(!spin)
        fetchData(setSpin,e.target[0].value,setValue)

    }
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Write your question for ChatGPT</h1>
        <form className='Form' onSubmit={subHandler}>
            <input type='text'/>
            <button>Send</button>
        </form>
            {spin?<Spin size='large'/>:<textarea value={value} cols={30} rows={30}></textarea>}
        </div>
    </div>
  )
}

async function fetchData(setSpin,data,setValue){
    const url = 'https://chatgpt-gpt-3-5.p.rapidapi.com/ask';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '863abdbfc6msha614011caeab561p1f2c34jsnbe8fe8b045d4',
		'X-RapidAPI-Host': 'chatgpt-gpt-3-5.p.rapidapi.com'
	},
	body: JSON.stringify({
		query: data
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setValue(result.response);
    setSpin(false)
} catch (error) {
	console.error(error);
}
}
