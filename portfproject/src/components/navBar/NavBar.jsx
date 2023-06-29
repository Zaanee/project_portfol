import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  return (
    <div >
        <ol className='NavBar'>
            <li>
                <Link to={'/'}>Main page</Link>
            </li>
            <li>
                <Link to={'/home'}>Smart home</Link>
            </li>
            <li>
                <Link to={'/proj'}>Projects</Link>
            </li>
            <li>
                <Link to={'/gpt'}>Chat with chatGPT</Link>
            </li>
            <li>
                <Link to={'/todolist'}>To Do List</Link>
            </li>
        </ol>
    </div>
  )
}
