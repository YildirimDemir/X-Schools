import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSupabase from '../services/dataSupabase';

const pp = [
    "../public/user-pp/dog.jpg",
    "../public/user-pp/eagle.jpg",
    "../public/user-pp/lion.jpg",
    "../public/user-pp/owl.jpg",
    "../public/user-pp/snake.jpg"
];

export default function Profile({ requestUser, requestUserSet }) {

    Profile.propTypes = {
        requestUser: PropTypes.object.isRequired,
        requestUserSet: PropTypes.func.isRequired
    };

    const [isOpen, setIsOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(requestUser.profileImage);
    const [username, setUsername] = useState(requestUser.username);
    const [name, setName] = useState(requestUser.firstname);
    const [surname, setSurname] = useState(requestUser.lastname);
    const [email, setEmail] = useState(requestUser.email);
    const [disabled, setDisabled] = useState(true);
    const [save, setSave] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        async function handleUpdate() {
            const { data, error } = await dataSupabase
                .from('users')
                .update({
                    username: username,
                    firstname: name,
                    lastname: surname,
                    email: email,
                    profileImage: profileImage
                })
                .eq('id', requestUser.id)
                .select()
            if (error) {
                console.error('Update Error:', error);
            } else {
                setDisabled(true);
                setSave(false);
            }
            const [first] = data;
            setDisabled(true);
            requestUserSet(first);
            const requestUserJSON = JSON.stringify(first);
            localStorage.setItem('Request User', requestUserJSON);
        }
        handleUpdate();
        navigate("/profile");
    }

    const handleEdit = () => {
        setDisabled((disabled) => !disabled);
        setSave((save) => !save);
        setProfileImage(requestUser.profileImage);
    }

    const isOpenHandler = () => {
        setIsOpen((i) => !i);
    }

    const handleProfileImage = (item) => {
        setIsOpen((i) => !i);
        setProfileImage(item);
    }

    return (
        <>
            <div className='profileContainer' style={isOpen ? { backdropFilter: 'brightness(0.6)' } : {}}>
                {isOpen &&
                    <div className="profileImageDB" >
                        <div className="profileImage-inner">
                            <h1>Images</h1>
                            <h1 onClick={() => isOpenHandler()} style={{ cursor: 'pointer' }}>❌</h1>
                        </div>
                        <div className='profileImageOpen'>
                            {pp.map((item, index) => (
                                <img className='userImage' onClick={() => handleProfileImage(item)} key={index} src={`${item}`} width="200px" height="300px" alt="" />
                            ))}
                        </div>
                    </div>
                }
                <div className='profileWrap' style={isOpen ? { filter: 'blur(4px)' } : {}}>
                    <div className='profileUp'>
                        <div className="profileImg">
                            <img style={{ borderRadius: "20px" }} src={profileImage} alt="" width="100%" height="auto" />
                        </div>
                        <div className="profileInfo">
                            <h1>{requestUser.firstname} {requestUser.lastname}</h1>
                            <button className='profileEditBtn' onClick={handleEdit}>Edit</button>
                            {save && <button className='profileImageChange' onClick={() => isOpenHandler()}>🚟</button>}
                        </div>
                    </div>
                    <div className='profileContent'>
                        <form style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} onSubmit={handleSubmit}>
                            <div className='profileDown'>
                                <div className="profileUsername">
                                    <label>Username</label>
                                    <input disabled={disabled} defaultValue={requestUser.username} onChange={(e) => (setUsername(e.target.value))} type="text" />
                                </div>
                                <div className="profileName">
                                    <label>Name</label>
                                    <input disabled={disabled} defaultValue={requestUser.firstname} onChange={(e) => (setName(e.target.value))} type="text" />
                                </div>
                                <div className="profileSurname">
                                    <label>Surname</label>
                                    <input disabled={disabled} defaultValue={requestUser.lastname} onChange={(e) => (setSurname(e.target.value))} type="text" />
                                </div>
                                <div className="profileEmail">
                                    <label>Email</label>
                                    <input disabled={disabled} defaultValue={requestUser.email} onChange={(e) => (setEmail(e.target.value))} type="email" />
                                </div>
                            </div>
                            {save && <div className="profileSave">
                                <button className='profileSaveBtn'>Save</button>
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
