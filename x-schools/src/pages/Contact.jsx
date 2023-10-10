export default function Contact(){
    return(
        <div className="contact-us">
            <div className="contact-us-content">
                <h1>Contact Us</h1>
               <Form />
               <TextBox />
               <Button />
            </div>
        </div>
    )
}

function Form() {
    return(
      <form className="contact-us-form">
        <div className="input-box">
            <div className="contact-icon">👤</div>
            <input type="text"placeholder="Firstname"/>
        </div>
        <div className="input-box">
            <div className="contact-icon">👤</div>
            <input type="text"placeholder="Lastname"/>
        </div>
        <div className="input-box">
            <div className="contact-icon">📧</div>
            <input type="text"placeholder="Email"/>
        </div>
        <div className="input-box">
            <div className="contact-icon">📞</div>
            <input type="text"placeholder="Phone Number"/>
        </div>
      </form>
    )
}

function TextBox(){
    return(
        <textarea placeholder="The subject you want to communicate"></textarea>
    )
}

function Button(){
    return(
        <button>Submit</button>
    )
}