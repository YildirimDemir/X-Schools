import { Link } from "react-router-dom";
import Button from "../ui/Button";
import PasswordInput from "../ui/PasswordInput";
import TextInput from "../ui/TextInput";
import LScard from "../ui/LScard";

export default function SignIn() {
  return (
    <div className="sign">
      <div className="box">
      <div className="inputs">
        <h1>Hello!</h1>
        <span>Sign-In your account</span>
        <TextInput placeholder='E-Mail' content='✉️'/>
        <PasswordInput />
        <div className="checkbox">
          <div className="rem">
            <input type="checkbox" name="" id="i" />
            <label htmlFor="i">Remember me</label>
          </div>
          <a href=''>Forgot password ?</a>
        </div>
        <Button title="Sign In"/>
        <span className="small-font">You don't have any account ? <Link to={'/sign-up'}>Sign Up</Link> here.</span>
      </div>
      <LScard 
        title='Welcome back to XSchool' 
        desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab!'/>
      </div>
    </div>

  )
}