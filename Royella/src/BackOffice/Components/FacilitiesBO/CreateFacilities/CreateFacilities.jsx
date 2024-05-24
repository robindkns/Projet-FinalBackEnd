// import './UpdateFacilities.sass'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CreateFacilities() {

    const navigate = useNavigate()

    const [formFacilities, setFormFacilities] = useState({
        title: '',
        icon: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFacilities({ ...formFacilities, [name]: value })
    }

    const createFacilities = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/api/createFacilities/', formFacilities)
                .then(res => {
                    console.log(res)
                    console.log(formFacilities);
                    navigate('/backoffice/facilities')
                })

        } catch (error) {
            console.log(error)
        }
    }


return (
    <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='pl-5 pt-3'><b>Back Office</b> - Facilities</h1>
        <div className='update-home-content py-5 px-5 h-[70%]'>
            <div className='backoffice-header'>
                <h3>Create Facilities</h3>
                <Link className='back' to={'/backoffice/facilities'}><button>Back</button></Link>
            </div>
            <form onSubmit={createFacilities}>
                <label>Title :</label>
                <input type="text" name='title' value={formFacilities.title} onChange={(e) => handleChange(e)} />
                <label className='label-icon'>Icon : <span className='link-icons'>Copy classname from <a target='_blank' rel='noreferrer' href="https://css.gg/app">css.gg</a></span></label>
                <input type="text" name='icon' value={formFacilities.icon} onChange={(e) => handleChange(e)} />
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
)
}