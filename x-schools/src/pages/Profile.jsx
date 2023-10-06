import Button from '../ui/Button'

export default function Profile() {
    return (
        <>
            <div className='profileContainer'>
                <div className='profileContent'>
                    <div className='profileUp'>
                        <div className="profileImg">

                        </div>
                        <div className="profileInfo">
                            <h1>Name Surname</h1>
                            <Button title="Edit" color="black" bgcolor='white' />
                        </div>
                    </div>
                    <div className='profileDown'>
                        <div className="profileUsername">
                            <label>Username:</label>
                            <input type="text" />
                        </div>
                        <div className="profileName">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="profileSurname">
                            <label>Surname:</label>
                            <input type="text" />
                        </div>
                        <div className="profileEmail">
                            <label>Email:</label>
                            <input type="email" />
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
