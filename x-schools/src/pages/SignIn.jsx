import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import PasswordInput from "../ui/PasswordInput";
import TextInput from "../ui/TextInput";
import LScard from "../ui/LScard";
import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import PropTypes from 'prop-types';

export default function SignIn({ logSetTrue, requestUserSet }) {

  SignIn.propTypes = {
    logSetTrue: PropTypes.func.isRequired,
    requestUserSet: PropTypes.func.isRequired
  };

  const [usersData, setUsersData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notUser, setNotUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data, error } = await dataSupabase
        .from('users')
        .select('*')
      if (error) {
        console.error(error)
        throw new Error('Users could not be loaded')
      }
      setUsersData(data);
    }
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = usersData.find((item) => item.email === email && item.password === password);
    if (newUser) {
      requestUserSet(newUser);
      const requestUserJSON = JSON.stringify(newUser);
      localStorage.setItem('Request User', requestUserJSON);
      logSetTrue(true);
      const logStatusJSON = JSON.stringify(true);
      localStorage.setItem('Log Status', logStatusJSON);
      setNotUser("");
      navigate("/home");
    }
    else {
      setNotUser("You entered the wrong password or email!");
    }
  };

  return (
    <div className="sign">
      {notUser && <h1 style={{ marginBottom: "5px", color: "red" }}>{notUser}</h1>}
      <div className="box">
        <div className="inputs">
          <h1>Hello!</h1>
          <span>Sign-In your account</span>
          <form style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }} onSubmit={handleSubmit}>
            <TextInput placeholder='E-Mail' content='✉️' valueSet={setEmail} />
            <PasswordInput placeholder="Password" content="🔒" valueSet={setPassword} />
            <div className="checkbox">
              <div className="rem">
                <input type="checkbox" name="" id="i" />
                <label htmlFor="i">Remember me</label>
              </div>
              <a href=''>Forgot password ?</a>
            </div>
            <Button type="submit" title="Sign In" />
          </form>
          <span className="small-font">You don&apos;t have any account ? <Link to={'/sign-up'}>Sign Up</Link> here.</span>
        </div>
        <LScard
          title='Welcome back to XSchool'
          desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab!' />
      </div>
    </div>

  )
}