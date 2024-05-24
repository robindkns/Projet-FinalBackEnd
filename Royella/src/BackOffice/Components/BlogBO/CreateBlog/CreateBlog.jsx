import './CreateBlog.sass'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function CreateBlog() {

    const [messageError, setMessageError] = useState('');

    const navigate = useNavigate();

    const [formBlog, setFormBlog] = useState({
        title : '',
        date : '',
        image : null,
        text : '',
        category : '',
        tag : '',
    });

    const handleChange=(e)=>{
        const {name, value, type, files} = e.target
        setFormBlog({...formBlog, [name]: type === "file" ? files[0] : value})
    }

    const createBlog =async(e)=>{
        e.preventDefault()
        if(formBlog.title === '' || formBlog.date === '' || formBlog.image === null || formBlog.text === '' || formBlog.category === '' || formBlog.tag === ''){
            setMessageError('Please fill all the fields correctly')
            console.log(formBlog);
        } else {
            try {
                await axios.post('http://127.0.0.1:8000/api/createBlog/', formBlog, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res)
                    console.log(formBlog);
                    navigate('/backoffice/blog')
            })
    
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="create-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Blog</h1>
            <div className='create-home-content py-5 px-5 h-[90%]'>
            <div className='backoffice-header'>
                    <h3>Create Blog</h3>
                    <Link className='back' to={'/backoffice/blog'}><button>Back</button></Link>
                </div>
                <form className='form-blog' onSubmit={createBlog}>
                    <label>Title :</label>
                        <input type="text" name='titre' value={formBlog.title} onChange={(e)=>handleChange(e)} />
                    <label>Tag :</label>
                        <input type="text" name='tag' value={formBlog.tag} onChange={(e)=>handleChange(e)}  />
                    <label>Category :</label>
                        <input type="text" name='category' value={formBlog.category} onChange={(e)=>handleChange(e)}  />
                    <label>Image :</label>
                        <input type="file" name='image' onChange={(e)=>handleChange(e)}  />
                    <label>Date :</label>
                        <input type="date" name='date' value={formBlog.date} onChange={(e)=>handleChange(e)}  />
                    <label>Text :</label>
                        <textarea type="text" name='text' value={formBlog.text} onChange={(e)=>handleChange(e)}  />

                    <div className='error' style={{display: messageError ? 'block' : 'none'}}>
                        {messageError}
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}