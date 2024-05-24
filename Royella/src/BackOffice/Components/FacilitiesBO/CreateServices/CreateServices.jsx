// import './UpdateFacilities.sass'
import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function CreateServices() {

    // const navigate = useNavigate()

    const [formServices, setFormServices] = useState({
        title: '',
        icon: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormServices({ ...formServices, [name]: value })
    }

    const createServices = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/api/createServices/', formServices)
                .then(res => {
                    console.log(res)
                    console.log(formServices);
                    // navigate('/backoffice')
                })

        } catch (error) {
            console.log(error)
        }
    }


return (
    <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='pl-5 pt-3'><b>Back Office</b> - Services</h1>
        <div className='update-home-content py-5 px-5 h-[100%]'>
            <div className='backoffice-header'>
                <h3>Create Services</h3>
                <Link className='back' to={'/backoffice/facilities'}><button>Back</button></Link>
            </div>
            <form onSubmit={createServices}>
                <label>Title :</label>
                <input type="text" name='title' value={formServices.title} onChange={(e) => handleChange(e)} />
                <label>Theme :</label>
                <input type="text" name='theme' value={formServices.theme} onChange={(e) => handleChange(e)} />
                <label>Description :</label>
                <input type="text" name='description' value={formServices.description} onChange={(e) => handleChange(e)} />
                <label>Order :</label>
                <input type="number" name='order' value={formServices.order} onChange={(e) => handleChange(e)} />
                <button type="submit">Add</button>
            </form>
        </div>
    </div>
)
}