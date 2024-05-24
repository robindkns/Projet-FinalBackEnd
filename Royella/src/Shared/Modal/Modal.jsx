import './Modal.sass';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loggedin, setMessage } from '../../Redux/features/userSlice';


export default function Modal(props){

    const [activeLog, setActiveLog] = useState(true);
    const dispatch = useDispatch()

    //PARTIE REGISTER

    const [formData, setFormData] = useState({
        password : '',
        email : '',
        last_name : '',
        first_name : '',
        username: '',
        image : null
    })

    const [formLogin, setFormLogin] = useState({
        password : '',
        username : ''
    })

    const register = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://127.0.0.1:8000/api/register/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data);
        props.setRefresh(!props.refresh)
        if (response.data.status === "success") {
            dispatch(setMessage({message: response.data.message}))
            
        } else {
            dispatch(setMessage({message: response.data.message}))
        }
    }

    const login = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://127.0.0.1:8000/api/login/', formLogin)
        console.log(response.data);
        const accessToken = response.data.access_token
        localStorage.setItem('access_token', accessToken)
        if (response.data.status === "success") {
            dispatch(setMessage({message: response.data.message}))
            dispatch(loggedin())
            props.setOpenModal(false)
            props.setRefresh(!props.refresh)
        } else {
            dispatch(setMessage({message: response.data.message}))
        }
        
    }

    const change = (e) => {
        const {name, value, type, files} = e.target
        setFormData({...formData, [name]: type === "file" ? files[0] : value})
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormLogin({...formLogin, [name]: value})
    }
    console.log(formLogin);
    return(
        <div className="login-container">
            <div className="modal-container" data-aos="fade-up" data-aos-duration="1000">
                <div className='flex justify-end modal-close-btn'>
                    <i onClick={() => props.setOpenModal(false)} className="gg-close"></i>
                </div>
                <div className="modal-header">
                    <span onClick={() => setActiveLog(true)} className={activeLog ? 'active-modal' : 'log'}>Log In</span>
                    <span className='active-modal'>|</span>
                    <span onClick={() => setActiveLog(false)} className={activeLog ? 'log' : 'active-modal'}>Register</span>
                </div>
                <div className='border-header'></div>
                <div className='modal-body'>
                    {activeLog ? 
                    <form onSubmit={login} className='form-login'>
                        <label>Username</label>
                        <input type="username" name="username" value={formLogin.username} onChange={handleChange} />
                        <label>Password</label>
                        <input type="password" name="password" value={formLogin.password} onChange={handleChange} />
                        <div className='flex justify-center'>
                            <button type='submit'>Log In</button>
                        </div>
                    </form> : 
                    <form onSubmit={register} className='form-register'>
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={change}  />
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={change}  />
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={change} />
                        <label>First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={change} />
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={change}  />
                        <label>Profile Picture</label>
                        <input type="file" name='image' onChange={(e)=>change(e)}  />
                        <div className='flex justify-center mt-3'>
                            <button type='submit'>Register</button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    )
}