import { useEffect, useState } from 'react'
import axios from 'axios'
import './HotelBO.sass'
import { Link } from 'react-router-dom'

export default function HotelBO() {

    const [hotel, setHotel] = useState({
        title: '',
        description: '',
        location: '',
        image: '',
        video : ''
    });


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/hotel/")
            .then((response) => {
                setHotel(response.data.hotels); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="update-home h-full w-[100%]" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Hotel</h1>
            <div className='backoffice-header'>
                <h3 className='ml-5 mt-3'>Hotel</h3>
            </div>
            {hotel ? <div className='update-home-content py-5 px-5 h-[100%] w-[100%]'>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4>Phone :</h4> {hotel.title}</div>
                </div>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4 className='w-[15%]'>Email :</h4> {hotel.description}</div>
                </div>
                <div className='row-contact'>
                    <div className='flex items-center gap-10'><h4>Location :</h4> {hotel.location}</div>
                </div>
                <div className='row-contact media-container'>
                    <div className='flex items-center gap-10'>
                        <h4>Image & Video :</h4> 
                        <div className='media-container'>
                            <img src={`http://127.0.0.1:8000${hotel.image}`} alt={hotel.title} />
                            <a href={`http://127.0.0.1:8000${hotel.video}`} target='_blank' rel="noreferrer">Video Link <i className="gg-play-button-r"></i></a>
                        </div>
                    </div>
                </div>
                <div className='contact-footer'>
                    <Link to={'/backoffice/hotel/update'}><button>Update</button></Link>
                </div>
            </div> : null}
        </div>
    )

}