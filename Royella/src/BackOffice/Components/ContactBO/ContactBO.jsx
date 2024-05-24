import { useEffect, useState } from 'react'
import axios from 'axios'
import './ContactBO.sass'
import { Link } from 'react-router-dom'

export default function ContactBO() {

    const [contact, setContact] = useState({
        tel: '',
        email: '',
        location: '',
        maps: '',
    });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/contact/")
            .then((response) => {
                setContact(response.data.contact);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="update-home h-full w-[100%]" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Contact</h1>
            <div className='update-home-content py-5 px-5 h-[90%] w-[100%]'>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4>Phone :</h4> {contact.tel}</div>
                </div>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4>Email :</h4> {contact.email}</div>
                </div>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4>Location :</h4> {contact.location}</div>
                </div>
                <div className='last-row-contact'>
                    <div className='flex items-center gap-10'><h4>Maps :</h4> <iframe
                        src={contact.maps}
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full"
                    ></iframe></div>
                </div>
                <div className='contact-footer'>
                    <Link to={'/backoffice/contact/update'}><button>Update</button></Link>
                </div>
            </div>
        </div>
    )

}