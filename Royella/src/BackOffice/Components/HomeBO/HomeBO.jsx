import './HomeBO.sass'
import axios from 'axios'
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';

export default function HomeBO() {

    const [banners, setBanners] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/home/")
        .then((response) => {
        setBanners(response.data.banner);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    const destroy = async (e) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteBanner/${e}` )
        .then(
            res => {
                console.log(res);
                setBanners(banners.filter(banner => banner.id !== e))
            }
        )
    }

    return (
    <>
        <div className='backoffice h-full' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Home</h1>
            <div className='backoffice-content py-5 px-5 h-[90%]'>
                <div className='backoffice-header'>
                    <h3>Banner</h3>
                    <Link className='add' to={'/backoffice/banner/add'}><button>Add</button></Link>
                </div>
                <div className="table-container h-full overflow-y-scroll">
                    <table className='h-full'>
                        <thead>
                            <tr scope='col' className='first-col'>ID</tr>
                            <tr scope='col'>Title</tr>
                            <tr scope='col'>Rating</tr>
                            <tr scope='col'>Image</tr>
                            <tr scope='col' className='last-col'></tr>
                        </thead>
                        <tbody>
                            {banners ? banners.map((banner,index)=>(
                                <tr key={index}>
                                    <th scope='row' className='first-col'>{banner.id}</th>
                                    <td>{banner.titre}</td>
                                    <td>{banner.stars}</td>
                                    <td><img src={`http://127.0.0.1:8000${banner.image}`} alt={banner.titre} /></td>
                                    <td className='last-col modifs-col'>
                                        <Link to={`/backoffice/banner/update/${banner.id}`}><i className="gg-pen edit"></i></Link>
                                        <i onClick={() => destroy(banner.id)} className="gg-remove delete"></i>
                                    </td>
                                </tr>
                            )) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    );
}