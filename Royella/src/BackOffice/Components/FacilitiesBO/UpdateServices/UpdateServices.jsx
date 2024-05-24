import './UpdateServices.sass'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function CreateServices() {

    const navigate = useNavigate()

    const [formService, setFormService] = useState({
        title: '',
        theme: '',
        description: '',
        order: 0,
        image: ''
    });

    const handleChange = (e) => {
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormService({...formService, [name]: files[0]})
        } else {
            delete formService['image']
        }
        if (type !== 'file') {
            setFormService({...formService, [name]: value})
        }
    }

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/readService/${id}/` )
        .then(response => setFormService(response.data.service))
        .catch(error => console.log(error))
    }, [id]);


    const updateService =async(e)=>{
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateService/${id}/`, formService,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => console.log(res.data))
        } catch (error) {
            console.log(error);
        }
        navigate('/backoffice/facilities')
    }


return (
    <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
        <h1 className='pl-5 pt-3'><b>Back Office</b> - Services</h1>
        <div className='update-home-content py-5 px-5 h-[100%]'>
            <div className='backoffice-header'>
                <h3>Update Services</h3>
                <Link className='back' to={'/backoffice/facilities'}><button>Back</button></Link>
            </div>
            <form onSubmit={updateService}>
                <label>Title : <span className='service-info'>{formService.title}</span></label>
                <label>Theme : <span className='service-info'>{formService.theme}</span></label>
                <label>Description :</label>
                <p className='service-info'>{formService.description}</p>
                <label>Image :<img className='service-image' src={`http://127.0.0.1:8000${formService.image}`}></img></label>
                <label>Order :</label>
                <input type="number" name='order' value={formService.order} onChange={(e) => handleChange(e)} />
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
)
}