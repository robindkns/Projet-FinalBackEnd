// import './CreateBlog.sass'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function CreateTestimonial() {

    const [messageError, setMessageError] = useState('');

    const navigate = useNavigate();

    const [formTestimonial, setFormTestimonial] = useState({
        name : '',
        rating : '',
        image : null,
        testi : '',
        country : '',
        city : '',
    });

    const handleChange=(e)=>{
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormTestimonial({...formTestimonial, [name]: files[0]})
        } else {
            delete formTestimonial['image']
        }
        if (type !== 'file') {
            setFormTestimonial({...formTestimonial, [name]: value})
        }
    }

    const createTestimonial =async(e)=>{
        console.log(formTestimonial);
        e.preventDefault()
        if(formTestimonial.name === '' || formTestimonial.rating === '' || formTestimonial.image === null || formTestimonial.testi === '' || formTestimonial.country === '' || formTestimonial.city === ''){
            setMessageError('Please fill all the fields correctly')
        } else {
            try {
                await axios.post('http://127.0.0.1:8000/api/createTestimonial/', formTestimonial, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res)
                    navigate('/backoffice/testimonials')
            })
    
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="create-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Testimonials</h1>
            <div className='create-home-content py-5 px-5 h-[90%]'>
            <div className='backoffice-header'>
                    <h3>Create Testimonial</h3>
                    <Link className='back' to={'/backoffice/testimonials'}><button>Back</button></Link>
                </div>
                <form className='form-blog' onSubmit={createTestimonial}>
                    <label>Name :</label>
                        <input type="text" name='name' value={formTestimonial.name} onChange={(e)=>handleChange(e)} />
                    <label>Country :</label>
                        <input type="text" name='country' value={formTestimonial.country} onChange={(e)=>handleChange(e)}  />
                    <label>City :</label>
                        <input type="text" name='city' value={formTestimonial.city} onChange={(e)=>handleChange(e)}  />
                    <label>Image :</label>
                        <input type="file" name='image' onChange={(e)=>handleChange(e)}  />
                    <label>Rating :</label>
                        <input type="number" name='rating' value={formTestimonial.rating} onChange={(e)=>handleChange(e)}  />
                    <label>Testimonial :</label>
                        <textarea type="text" name='testi' value={formTestimonial.testi} onChange={(e)=>handleChange(e)}  />
                    <div className='error' style={{display: messageError ? 'block' : 'none'}}>
                        {messageError}
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}