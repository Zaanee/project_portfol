import { useNavigate } from 'react-router-dom';
import './regPage.css'

export default function RegPage({setuserName}) {
    const navigate = useNavigate();

    const loginHandler = (eve) => {
        if (eve.key === 'Enter') {
            setuserName(eve.target.value);
            document.cookie = `userName=${eve.target.value};max-age=${60*1}`
            navigate('/')
        }
    }
  return (
    <div className="regPage">
        <input 
        onKeyDown={loginHandler}
        type="text" placeholder="введите имя" />
    </div>
  )
}
