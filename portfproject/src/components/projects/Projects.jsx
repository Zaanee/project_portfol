import React from 'react'
import ProjectOne from './ProjectOne/ProjectOne';
import { useState } from 'react';

export default function Projects({onEnter}) {
    const [projectList, setProjectList] = useState([
        {id:1,
        name: 'Angry Ducks'
        },
        {id:2,
            name: 'Smart home'
        },
        {id:3,
            name: 'To do list'
        },
        {id:4,
            name: 'Chat GPT'
        },
    ])
    const [newProject, setnewProject] = useState(false)
    const [searchValue, setsearchValue] = useState('')
    const searchHandler = (e) => {
        setsearchValue(e.target.value)
    }
  return (
    <div>
        {newProject?<>
        <label>
            new project: 
            <input onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    const obj = {
                        id: projectList.length+1,
                        name: e.target.value,
                    }
                    setProjectList([...projectList,obj])
                    setnewProject(false)
                }
            }} type='text'/>
        </label>
        </>:
        <>
        <input type='text' onChange={searchHandler}/>
        <button
        onClick={()=>{setnewProject(true)}}
        >Add project</button>
        <ol>
            {projectList.map((el) => {
                if(el.name.includes(searchValue)){
                    return <ProjectOne
                    projectList={projectList}
                    setProjectList={setProjectList}
                    el={el}
                    />
                }
                return null
            })}
        </ol>
        </>
        }
    </div>
  )
}
