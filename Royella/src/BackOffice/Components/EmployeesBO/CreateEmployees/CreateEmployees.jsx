// import './UpdateManager.sass'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function UpdateEmployees() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [formEmployees, setFormEmployees] = useState({
        name: '',
        poste: '',
        email: '',
        image: ''
    });


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/readEmployees/${id}/` )
        .then(response => setFormEmployees(response.data.employee))
        .catch(error => console.log(error))
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormEmployees({ ...formEmployees, [name]: value })
    }

    const createEmployees = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/api/createEmployees/', formEmployees)
                .then(res => {
                    console.log(res)
                    console.log(formEmployees);
                    navigate('/backoffice/employees')
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Employees</h1>
            <div className='update-home-content py-5 px-5 h-[100%]'>
                <div className='backoffice-header'>
                    <h3>Create Employees</h3>
                    <Link className='back' to={'/backoffice/employees'}><button>Back</button></Link>
                </div>
                <form onSubmit={createEmployees}>
                    <label>Name :</label>
                    <input type="text" name='name' value={formEmployees.name} onChange={(e) => handleChange(e)} />
                    <label>Poste :</label>
                    <input type="text" name='poste' value={formEmployees.poste} onChange={(e) => handleChange(e)} />
                    <label>Email :</label>
                    <input type="email" name='email' value={formEmployees.email} onChange={(e) => handleChange(e)} />
                    <label>Image :</label>
                    <div className='flex items-center gap-5'>
                        <img className='h-[100px]' src={`http://127.0.0.1:8000${formEmployees.image}`} />
                        <input type="file" name='image' onChange={(e) => handleChange(e)} />
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}