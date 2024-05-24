import './BlogBO.sass'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function BlogBO() {


    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/blog/")
            .then((response) => {
                if (response.data.blogs) {
                    setBlogs(response.data.blogs);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const destroy = async (e) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteBlog/${e}`)
            .then(
                res => {
                    console.log(res);
                    setBlogs(blogs.filter(blog => blog.id !== e))
                }
            )
    }

    return (
        <div className='update-home h-full w-[100%]' data-aos="fade-up" data-aos-duration="1000" >
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Blogs</h1>
            <div className='update-home-content py-5 px-5 h-[90%] w-[100%]'>
                <div className='facilities-container h-[100%]'>
                    <div className='backoffice-header'>
                        <h3>Blogs</h3>
                        <Link className='add' to={'/backoffice/blog/add'}><button>Add</button></Link>
                    </div>
                    <div className="table-blogs-container h-[80%] overflow-y-scroll">
                        <table className='h-full'>
                            <thead>
                                <tr scope='col' className='first-col'>ID</tr>
                                <tr scope='col'>Title</tr>
                                <tr scope='col'>Image</tr>
                                <tr scope='col' className='facilities-last-col'></tr>
                            </thead>
                            <tbody>
                                {blogs ? blogs.map((blog, index) => (
                                    <tr key={index}>
                                        <th scope='row' className='first-col'>{blog.id}</th>
                                        <td>{blog.title}</td>
                                        <td><img className='w-[50%]' src={`http://127.0.0.1:8000${blog.image}`} alt="" /></td>
                                        <td className='facilities-last-col'>
                                            <Link to={`/backoffice/blogs/update/${blog.id}`}><i className="gg-pen edit"></i></Link>
                                            <i onClick={() => destroy(blog.id)} className="gg-remove delete"></i>
                                        </td>
                                    </tr>
                                )) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}