import Button from '../ui/Button';
import PropTypes from 'prop-types';

export default function Profile({ requestUser }) {

    Profile.propTypes = {
        requestUser: PropTypes.object.isRequired,
    };

    return (
        <>
            <div className='profileContainer'>
                <div className='profileContent'>
                    <div className='profileUp'>
                        <div className="profileImg">

                        </div>
                        <div className="profileInfo">
                            <h1>{requestUser.firstname} {requestUser.lastname}</h1>
                            <Button title="Edit" color="black" bgcolor='white' />
                        </div>
                    </div>
                    <div className='profileDown'>
                        <div className="profileUsername">
                            <label>Username:</label>
                            <input disabled defaultValue={requestUser.username} type="text" />
                        </div>
                        <div className="profileName">
                            <label>Name:</label>
                            <input disabled defaultValue={requestUser.firstname} type="text" />
                        </div>
                        <div className="profileSurname">
                            <label>Surname:</label>
                            <input disabled defaultValue={requestUser.lastname} type="text" />
                        </div>
                        <div className="profileEmail">
                            <label>Email:</label>
                            <input disabled defaultValue={requestUser.email} type="email" />
                        </div>
                    </div>
                    <div className="profileSave">
                        <Button title="Save" color="white" bgcolor='black' />
                    </div>
                </div>
            </div>
        </>
    )
}
