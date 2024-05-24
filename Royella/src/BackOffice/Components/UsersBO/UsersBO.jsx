import axios from "axios";
import { useState, useEffect } from "react";
import './UsersBO.sass'

export default function UsersBO() {
    
    
    const [users, setUsers] = useState(null);
    const [roles, setRoles] = useState(null);
    console.log(users);

    const [formUsers, setFormUsers] = useState({
        role : '',
    });

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/users/")
            .then((response) => {
                if (response.data.users) {
                    setUsers(response.data.users);
                    setRoles(response.data.roles);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormUsers({ ...formUsers, [name]: value })
    }

    const updateRoleUser =async(e,id)=>{
        e.preventDefault()
        try {
            await axios.put(`http://127.0.0.1:8000/api/updateRoleUser/${id}/`, formUsers)
            .then(res => console.log(res.data))
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='update-home h-full w-[100%]' data-aos="fade-up" data-aos-duration="1000" >
        <h1 className='pl-5 pt-3'><b>Back Office</b> - Users</h1>
        <div className='update-home-content py-5 px-5 h-[90%] w-[100%]'>
            <div className='facilities-container h-[100%]'>
                <div className='backoffice-header'>
                    <h3>Users</h3>
                </div>
                <div className="table-facilities-container h-[80%] overflow-x-scroll">
                        <table className='h-full'>
                            <thead>
                                <tr scope='col' className='first-col'>ID</tr>
                                <tr scope='col'>Username</tr>
                                <tr scope='col'>Email</tr>
                                <tr scope='col' className='facilities-last-col'>Role</tr>
                            </thead>
                            <tbody>
                                {users && roles ? users.map((user, index) => (
                                    <tr key={index}>
                                        <th scope='row' className='first-col'>{user.id}</th>
                                        <td>{user.username}</td>
                                        <td className='icon-container'>{user.email}</td>
                                        <td className='facilities-last-col'>
                                            <select onChange={(e) => handleChange(e)} name="role">
                                                {roles.map((role,index) => (
                                                    <option key={index} value={role.id}>{role.name}</option>
                                                ))}
                                            </select>
                                            <button onClick={(e) => updateRoleUser(e, user.id)}><i className="gg-pen edit"></i></button>
                                        </td>
                                    </tr>
                                )) : null}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
        </div>
    );
}