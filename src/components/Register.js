import { Link } from "react-router-dom";
import { useState } from "react";

const Register = ({ user, setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [status, setStatus] = useState();

  const addUser = () => {
    if (userName === "" || password === "") {
      setRegisterStatus("Geçersiz Kullanıcı Adı ya da Şifre");
      setStatus("red");
    } else if (userName.length < 5 || password.length < 5) {
      setRegisterStatus("Kullanıcı adı ya da Şifre 5 karakterden az olamaz");
      setStatus("red");
    } else if (user.find((item) => item.username === userName)) {
      setRegisterStatus("Bu kullanıcı adı daha önce alınmış");
      setStatus("red");
    } else {
      setUser([
        ...user,
        { username: userName, password: password, id: Date.now() },
      ]);
      setUserName("");
      setPassword("");
      setRegisterStatus("Kayıt başarılı.. Giriş yapmak için tıklayınız");
      setStatus("green");
    }
  };
  return (
    <form action='' onSubmit={(e) => e.preventDefault()}>
      <div className='login-container'>
        <h2>Register</h2>
        <div className='input-container'>
          <div className='username'></div>
          <input
            type='text'
            name=''
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className='password'>
            <input
              type='password'
              name=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='button-container'>
          <button to='' className='button' onClick={addUser}>
            Register
          </button>
        </div>
        <div className='registercontainer'>
          {registerStatus && <Link className={status}>{registerStatus}</Link>}
        </div>
      </div>
    </form>
  );
};

export default Register;
