import './UpdateFacilities.sass'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UpdateFacilities() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [formFacilities, setFormFacilities] = useState({
        title : '',
        icon : ''
    });


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/readFacilities/${id}/` )
        .then(response => setFormFacilities(response.data.facility))
        .catch(error => console.log(error))
    }, [id]);


    const updateFacilities =async(e)=>{
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateFacilities/${id}/`, formFacilities)
            .then(res => console.log(res.data))
        } catch (error) {
            console.log(error);
        }
        navigate('/backoffice/facilities')
    }

    const handleChange=(e)=>{
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormFacilities({...setFormFacilities, [name]: files[0]})
        } else {
            delete setFormFacilities['image']
        }
        if (type !== 'file') {
            setFormFacilities({...setFormFacilities, [name]: value})
        }
    }

    return (
        <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Facilities</h1>
            <div className='update-home-content py-5 px-5 h-[70%]'>
            <div className='backoffice-header'>
                    <h3>Update Facilities</h3>
                    <Link className='back' to={'/backoffice/facilities'}><button>Back</button></Link>
                </div>
                <form onSubmit={updateFacilities}>
                    <label>Title :</label>
                        <input type="text" name='title' value={formFacilities.title} onChange={(e)=>handleChange(e)} />
                    <label className='label-icon'>Icon : <span className='link-icons'>Copy classname from <a target='_blank' rel='noreferrer' href="https://css.gg/app">css.gg</a></span></label>
                        <input type="text" name='icon' value={formFacilities.icon} onChange={(e)=>handleChange(e)}  />
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}