import './FacilitiesBO.sass'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FacilitiesBO() {


    const [facilities, setFacilities] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/facilities/")
            .then((response) => {
                if (response.data.facilities) {
                    setFacilities(response.data.facilities);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [services, setServices] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/services/")
            .then((response) => {
                if (response.data.services) {
                    setServices(response.data.services);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const destroy = async (e) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteFacilities/${e}`)
            .then(
                res => {
                    console.log(res);
                    setFacilities(facilities.filter(facility => facility.id !== e))
                }
            )
    }

    return (
        <div className='update-home h-full w-[100%]' data-aos="fade-up" data-aos-duration="1000" >
            <h1 className='pl-5 pt-3'><b>Back Office</b> - Facilities</h1>
            <div className='update-home-content py-5 px-5 h-[90%] w-[100%]'>
                <div className='facilities-container h-[50%]'>
                    <div className='backoffice-header'>
                        <h3>Facilities</h3>
                        <Link className='add' to={'/backoffice/facilities/add'}><button>Add</button></Link>
                    </div>
                    <div className="table-facilities-container h-[80%] overflow-y-scroll">
                        <table className='h-full'>
                            <thead>
                                <tr scope='col' className='first-col'>ID</tr>
                                <tr scope='col'>Title</tr>
                                <tr scope='col'>Icon</tr>
                                <tr scope='col' className='facilities-last-col'></tr>
                            </thead>
                            <tbody>
                                {facilities ? facilities.map((facility, index) => (
                                    <tr key={index}>
                                        <th scope='row' className='first-col'>{facility.id}</th>
                                        <td>{facility.title}</td>
                                        <td className='icon-container'>
                                            <span><i className={facility.icon}></i></span>
                                            <span>|</span>
                                            <span>{facility.icon}</span>
                                        </td>
                                        <td className='facilities-last-col'>
                                            <Link to={`/backoffice/facilities/update/${facility.id}`}><i className="gg-pen edit"></i></Link>
                                            <i onClick={() => destroy(facility.id)} className="gg-remove delete"></i>
                                        </td>
                                    </tr>
                                )) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='facilities-container h-[50%]'>
                    <div className='backoffice-header'>
                        <h3>Services</h3>
                    </div>
                    <div className="table-services-container h-[80%] overflow-y-scroll">
                        <table className='h-full'>
                            <thead>
                                <tr scope='col' className='first-col'>ID</tr>
                                <tr scope='col'>Title</tr>
                                <tr scope='col'>Theme</tr>
                                <tr scope='col' className='order-col'>Order</tr>
                                <tr scope='col'>Description</tr>
                                <tr scope='col'>Image</tr>
                                <tr scope='col' className='services-last-col'></tr>
                            </thead>
                            <tbody>
                                {services ? services.map((service, index) => (
                                    <tr key={index}>
                                        <th scope='row' className='first-col'>{service.id}</th>
                                        <td>{service.title}</td>
                                        <td>{service.theme}</td>
                                        <td className='order-col'>{service.order}</td>
                                        <td className='overflow-x-scroll flex items-start'>{service.description}</td>
                                        <td><img src={`http://127.0.0.1:8000${service.image}`}></img></td>
                                        <td className='services-last-col'>
                                            <Link to={`/backoffice/facilities/services/update/${service.id}`}>
                                                <i className="gg-pen edit"></i>
                                            </Link>
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