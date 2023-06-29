import delLogo from '../../../pics/Trash bin.png'

export default function ProjectOne({el,setProjectList,projectList}) {
  return (
    <li style={{
        display: 'flex',
        flexDirection: 'row',
    }}>
        {`${el.id}.`}
        {el.name}
        
        <img style={{height: '20px',width: '20px',alignSelf: 'center'}} 
        onClick={() => {
            const arr = projectList.filter((ele) => {
                console.log(el.id,ele.id);
                return ele.id !== el.id
            })
            setProjectList(arr)
        }}
        src={delLogo} alt='here could be your ad'/>
        
    </li>
  )
}
