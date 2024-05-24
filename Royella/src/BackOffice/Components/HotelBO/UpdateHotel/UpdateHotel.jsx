import './UpdateHotel.sass'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function UpdateHotel() {

    const navigate = useNavigate()

    const [formHotel, setFormHotel] = useState({
        title: '',
        description: '',
        image: '',
        location: '',
        video: ''
    });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/hotel/")
            .then((response) => {
                setFormHotel(response.data.hotels);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormHotel({...formHotel, [name]: files[0]})
        } else {
            delete formHotel['image']
        }
        if (type !== 'file') {
            setFormHotel({...formHotel, [name]: value})
        }
    }

    const updateHotel = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateHotel/`, formHotel,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => console.log(res.data))
        } catch (error) {
            console.log(error);
        }
        navigate('/backoffice/hotel')
    }

    return (
        <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Hotel</h1>
            <div className='update-home-content py-5 px-5 h-[100%]'>
                <div className='backoffice-header'>
                    <h3>Update Hotel</h3>
                    <Link className='back' to={'/backoffice/hotel'}><button>Back</button></Link>
                </div>
                <form onSubmit={updateHotel}>
                    <label>Title :</label>
                    <input type="text" name='title' value={formHotel.title} onChange={(e) => handleChange(e)} />
                    <label>Description :</label>
                    <input type="text" name='description' value={formHotel.description} onChange={(e) => handleChange(e)} />
                    <label>Location :</label>
                    <input type="text" name='location' value={formHotel.location} onChange={(e) => handleChange(e)} />
                    <label>Video :</label>
                    <input type="text" name='video' value={formHotel.video} onChange={(e) => handleChange(e)} />
                    <div className='flex items-center gap-5'>
                        <label>Image :</label>
                        <input type="file" name='image' onChange={(e) => handleChange(e)} />
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}