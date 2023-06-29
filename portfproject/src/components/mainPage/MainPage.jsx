import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export default function MainPage({userName}) {
    const navigate = useNavigate();
    useEffect(() => {
        if(!userName){
            navigate('/reg');
        }
    },[navigate,userName])
  return (
    <div>Hello,{userName}</div>
  )
}
