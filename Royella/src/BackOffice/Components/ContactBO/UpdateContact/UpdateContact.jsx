import './UpdateContact.sass'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ContactBO() {

    const navigate = useNavigate()

    const [formContact, setFormContact] = useState({
        tel : '',
        email : '',
        location : '',
        maps : '',
    });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/contact/")
        .then((response) => {
        setFormContact(response.data.contact);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    const handleChange=(e)=>{
        const {name, value} = e.target
        setFormContact({...formContact, [name]: value})
    }

    const updateContact =async(e)=>{
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateContact/`, formContact)
            .then(res => console.log(res.data))
        } catch (error) {
            console.log(error);
        }
        navigate('/backoffice/contact')
    }

    return (
        <div className="update-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Contact</h1>
            <div className='update-home-content py-5 px-5 h-[90%]'>
            <div className='backoffice-header'>
                    <h3>Update Contact</h3>
                    <Link className='back' to={'/backoffice/contact'}><button>Back</button></Link>
                </div>
                <form onSubmit={updateContact}>
                    <label>Phone :</label>
                        <input type="text" name='tel' value={formContact.tel} onChange={(e)=>handleChange(e)} />
                    <label>Email :</label>
                        <input type="email" name='email' value={formContact.email} onChange={(e)=>handleChange(e)}  />
                    <label>Location :</label>
                        <input type="text" name='location' value={formContact.location} onChange={(e)=>handleChange(e)}  />
                    <label>Maps :</label>
                        <input type="text" name='maps' value={formContact.maps} onChange={(e)=>handleChange(e)}  />
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}