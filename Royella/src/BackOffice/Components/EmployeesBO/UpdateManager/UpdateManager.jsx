// import './UpdateManager.sass'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function UpdateManager() {

    const navigate = useNavigate()

    const [formManager, setFormManager] = useState({
        name: '',
        poste: '',
        quote: '',
        image: ''
    });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/manager/")
            .then((response) => {
                setFormManager(response.data.manager);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormManager({...formManager, [name]: files[0]})
        } else {
            delete formManager['image']
        }
        if (type !== 'file') {
            setFormManager({...formManager, [name]: value})
        }
    }

    const updateManager = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateManager/`, formManager,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => console.log(res.data))
        } catch (error) {
            console.log(error); 
        }
        navigate('/backoffice/employees')
    }

    return (
        <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Manager</h1>
            <div className='update-home-content py-5 px-5 h-[100%]'>
                <div className='backoffice-header'>
                    <h3>Update Manager</h3>
                    <Link className='back' to={'/backoffice/employees'}><button>Back</button></Link>
                </div>
                <form onSubmit={updateManager}>
                    <label>Name :</label>
                    <input type="text" name='name' value={formManager.name} onChange={(e) => handleChange(e)} />
                    <label>Poste :</label>
                    <input type="text" name='poste' value={formManager.poste} onChange={(e) => handleChange(e)} />
                    <label>Quote :</label>
                    <input type="text" name='quote' value={formManager.quote} onChange={(e) => handleChange(e)} />
                    <label>Image :</label>
                    <div className='flex items-center gap-5'>
                        <img className='h-[100px]' src={`http://127.0.0.1:8000${formManager.image}`} alt={formManager.name} />
                        <input type="file" name='image' onChange={(e) => handleChange(e)} />
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}