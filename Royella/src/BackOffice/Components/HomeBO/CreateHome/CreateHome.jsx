import './CreateHome.sass'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function CreateHome() {

    const [messageError, setMessageError] = useState('');

    const navigate = useNavigate();

    const [formBanner, setFormBanner] = useState({
        titre : '',
        stars : 0,
        image : null,
    });

    const handleChange=(e)=>{
        const {name, value, type, files} = e.target
        setFormBanner({...formBanner, [name]: type === "file" ? files[0] : value})
    }

    const createBanner =async(e)=>{
        e.preventDefault()
        if(formBanner.titre === '' || formBanner.stars === 0 || formBanner.image === null || formBanner.stars < 0 || formBanner.stars > 5){
            setMessageError('Please fill all the fields correctly')
            console.log(formBanner);
        } else {
            formBanner.stars = parseInt(formBanner.stars)
            try {
                await axios.post('http://127.0.0.1:8000/api/createBanner/', formBanner, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res)
                    console.log(formBanner);
                    navigate('/backoffice')
            })
    
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="create-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Home</h1>
            <div className='create-home-content py-5 px-5 h-[90%]'>
            <div className='backoffice-header'>
                    <h3>Create Banner</h3>
                    <Link className='back' to={'/backoffice'}><button>Back</button></Link>
                </div>
                <form onSubmit={createBanner}>
                    <label>Title :</label>
                        <input type="text" name='titre' value={formBanner.titre} onChange={(e)=>handleChange(e)} />
                    <label>Rating :</label>
                        <div className='rating-container'>
                            <input className='rating' type="number" name='stars' value={formBanner.stars} onChange={(e)=>handleChange(e)}  />
                            <p>(0-5)</p>
                        </div>
                    <label>Image :</label>
                        <input type="file" name='image' onChange={(e)=>handleChange(e)}  />
                    <div className='error' style={{display: messageError ? 'block' : 'none'}}>
                        {messageError}
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}