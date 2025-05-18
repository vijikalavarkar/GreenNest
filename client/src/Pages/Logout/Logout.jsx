import { useEffect } from 'react'
import './Logout.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'


const Logout = () => {


    const navigate = useNavigate();
    const {userLogout} = useAuth();
    
    useEffect(()=>{
        userLogout();
    },[userLogout])

    navigate('/login')

}
export default Logout