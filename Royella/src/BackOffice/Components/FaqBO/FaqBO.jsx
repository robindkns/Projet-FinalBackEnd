// import './FacilitiesBO.sass'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FaqBO() {


    const [faq, setFaq] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/faq/")
            .then((response) => {
                if (response.data.faq) {
                    setFaq(response.data.faq);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const destroy = async (e) => {
        await axios.delete(`http://127.0.0.1:8000/api/deleteFaq/${e}`)
            .then(
                res => {
                    console.log(res);
                    setFaq(faq.filter(question => question.id !== e))
                }
            )
    }

    return (
        <div className='update-home h-full w-[100%]' data-aos="fade-up" data-aos-duration="1000" >
            <h1 className='pl-5 pt-3'><b>Back Office</b> - F.A.Q.</h1>
            <div className='update-home-content py-5 px-5 h-[90%] w-[100%]'>
                <div className='facilities-container h-[90%]'>
                    <div className='backoffice-header'>
                        <h3>F.A.Q.</h3>
                        <Link className='add' to={'/backoffice/faq/add'}><button>Add</button></Link>
                    </div>
                    <div className="table-facilities-container h-[90%] overflow-y-scroll">
                        <table className='h-full'>
                            <thead>
                                <tr scope='col' className='first-col'>ID</tr>
                                <tr scope='col'>Question</tr>
                                <tr scope='col'>Answer</tr>
                                <tr scope='col' className='facilities-last-col'></tr>
                            </thead>
                            <tbody>
                                {faq ? faq.map((question, index) => (
                                    <tr key={index}>
                                        <th scope='row' className='first-col'>{question.id}</th>
                                        <td>{question.question}</td>
                                        <td className='overflow-x-scroll flex items-start'>{question.response}</td>
                                        <td className='facilities-last-col'>
                                            <i onClick={() => destroy(question.id)} className="gg-remove delete"></i>
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