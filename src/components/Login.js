import "./Login.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Login = ({ user, setActiveUser, activeUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [eye, setEye] = useState("visibility");
  const [checkLogin, setCheckLogin] = useState("");
  const [hata, setHata] = useState("");
  const setHidden = () => {
    if (showPassword === "password") {
      setEye("visibility_off");
      setShowPassword("text");
    } else {
      setShowPassword("password");
      setEye("visibility");
    }
  };
  const login = () => {
    const checkUser = user.map((item) => item.username);
    const checkPassword = user.map((item) => item.password);

    if (userName.length < 5 || password.length < 5) {
      setUserName("");
      setPassword("");
      setHata("Kullanıcı adı ya da şifre en az 5 karakter olmalı");
    } else if (
      checkUser.includes(userName) &&
      checkPassword.includes(password)
    ) {
      setUserName("");
      setPassword("");
      setActiveUser(userName);
    } else {
      setCheckLogin("/");
      setUserName("");
      setPassword("");
      setHata("Kullanıcı adı ya da şifre hatalı");
    }
  };

  useEffect(() => {
    const checkUser = user.map((item) => item.username);
    const checkPassword = user.map((item) => item.password);

    if (checkUser.includes(userName) && checkPassword.includes(password)) {
      setCheckLogin("/todo");
    } else {
      setCheckLogin("/");
    }
  }, [password, userName]);
  return (
    <form action='' onSubmit={(e) => e.preventDefault()}>
      <div className='login-container'>
        <h2>Giriş</h2>
        <div className='input-container'>
          <div className='username'></div>
          <input
            type='text'
            name=''
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <div className='password'>
            <input
              type={showPassword}
              name=''
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className='material-symbols-outlined eye' onClick={setHidden}>
              {eye}
            </span>
          </div>
        </div>
        <div className='button-container'>
          <Link className='' to={checkLogin}>
            <button className='button' onClick={login}>
              Giriş
            </button>
          </Link>
          <span>&</span>

          <Link to='/Register' className='button'>
            Kayıt Ol
          </Link>
          {hata && <span className='hata'>{hata}</span>}
        </div>
      </div>
    </form>
  );
};

export default Login;
