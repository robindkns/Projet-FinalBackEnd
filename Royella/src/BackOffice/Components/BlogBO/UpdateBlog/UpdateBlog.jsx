// import './CreateBlog.sass'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function CreateBlog() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [formBlog, setFormBlog] = useState({
        title: '',
        date: '',
        image: null,
        text: '',
        category: '',
        tag: [],
    });

    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleChange=(e)=>{
        const {name, value, type, files} = e.target
        if (type === 'file' && files.length > 0) {
            setFormBlog({...formBlog, [name]: files[0]})
        } else {
            delete formBlog['image']
        }
        if (type !== 'file') {
            setFormBlog({...formBlog, [name]: value})
        }
    }

    const handleTagChange = (e) => {
        const options = [...e.target.selectedOptions];
        const values = options.map(option => parseInt(option.value));
        setFormBlog({ ...formBlog, tag: values });
    };


    const updateBlog = async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/api/updateBlog/${id}/`, formBlog, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res)
                navigate('/backoffice/blog')
            })
            .catch(error => console.log(error))
        navigate('/backoffice/blog')
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/readBlog/${id}/`)
            .then(res => {
                setFormBlog(res.data.blog)

            })
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/blog/")
            .then((res) => {
                setTags(res.data.tags)
                setCategories(res.data.categories)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (!(formBlog.image instanceof File)) {
            delete formBlog['image']
        }
    }, [formBlog])

    console.log(formBlog);


    return (
        <div className="create-home h-full" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Blog</h1>
            <div className='create-home-content py-5 px-5 h-[100%]'>
                <div className='backoffice-header'>
                    <h3>Update Blog</h3>
                    <Link className='back' to={'/backoffice/blog'}><button>Back</button></Link>
                </div>
                <form className='form-blog' onSubmit={updateBlog}>
                    <label>Title :</label>
                    <input type="text" name='title' value={formBlog.title} onChange={(e) => handleChange(e)} />
                    <label>Tag :</label>
                    <select
                        multiple={true}
                        name="tag"
                        value={formBlog.tag}
                        onChange={(e) => handleTagChange(e)}
                        className=""
                    >
                        {tags ? tags.map((tag, index) => (
                            <option key={index} value={tag.id}>{tag.name}</option>
                        )) : null}
                    </select>
                    <label>Category :</label>
                    <select required onChange={(e) => setFormBlog({ ...formBlog, category: parseInt(e.target.value) })} name="category" id="">
                        {categories ? categories.map((category, index) => (
                            <option key={index} value={category.id}>{category.name}</option>
                        )) : null}
                    </select>
                    <label>Image :</label>
                    <input type="file" name='image' onChange={(e) => handleChange(e)} />
                    <label className='mt-10'>Date :</label>
                    <input type="date" name='date' value={formBlog.date} onChange={(e) => handleChange(e)} />
                    <label>Text :</label>
                    <textarea type="text" name='text' value={formBlog.text} onChange={(e) => handleChange(e)} />
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    )
}