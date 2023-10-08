import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSupabase from '../services/dataSupabase';

export default function Profile({ requestUser, requestUserSet }) {

    Profile.propTypes = {
        requestUser: PropTypes.object.isRequired,
        requestUserSet: PropTypes.array.isRequired
    };

    const [usersData, setUsersData] = useState([]);
    const [username, setUsername] = useState(requestUser.username);
    const [name, setName] = useState(requestUser.firstname);
    const [surname, setSurname] = useState(requestUser.lastname);
    const [email, setEmail] = useState(requestUser.email);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    const handleData = () => {
        async function getUsers() {
            const { data, error } = await dataSupabase
                .from('users')
                .select('*')
            if (error) {
                console.error(error)
                throw new Error('Users could not be loaded')
            }
            console.log(data);
            setUsersData(data);
            const newUser = usersData.find((item) => item.username === username);
            requestUserSet(newUser);
            console.log(newUser);
            localStorage.setItem('Request User', newUser);
        }
        getUsers();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // async function handleUpdate() {
        //     const { error } = await dataSupabase
        //         .from('users')
        //         .update({
        //             username: username,
        //             firstname: name,
        //             lastname: surname,
        //             email: email,
        //         })
        //         .eq('id', requestUser.id)
        //         .select()
        //     if (error) {
        //         console.error('Update Error:', error);
        //     } else {
        //         console.log('User Save:', username);
        //     }
        //     setDisabled(true);
        // }
        // handleUpdate();
        handleData();
        navigate("/profile");
    }

    const handleEdit = () => {
        setDisabled(false);
    }

    return (
        <>
            <div className='profileContainer'>
                <div className='profileContent'>
                    <div className='profileUp'>
                        <div className="profileImg">
                            <img src="../../public/user-pp/v.jpg" alt="" width="100%" height="100%" />
                        </div>
                        <div className="profileInfo">
                            <h1>{requestUser.firstname} {requestUser.lastname}</h1>
                            <button onClick={handleEdit}>Edit</button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='profileDown'>
                            <div className="profileUsername">
                                <label>Username:</label>
                                <input disabled={disabled} defaultValue={requestUser.username} onChange={(e) => (setUsername(e.target.value))} type="text" />
                            </div>
                            <div className="profileName">
                                <label>Name:</label>
                                <input disabled={disabled} defaultValue={requestUser.firstname} onChange={(e) => (setName(e.target.value))} type="text" />
                            </div>
                            <div className="profileSurname">
                                <label>Surname:</label>
                                <input disabled={disabled} defaultValue={requestUser.lastname} onChange={(e) => (setSurname(e.target.value))} type="text" />
                            </div>
                            <div className="profileEmail">
                                <label>Email:</label>
                                <input disabled={disabled} defaultValue={requestUser.email} onChange={(e) => (setEmail(e.target.value))} type="email" />
                            </div>
                        </div>
                        <div className="profileSave">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
