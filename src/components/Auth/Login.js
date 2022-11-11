import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleIdentifier = (e) => {
    setIdentifier(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async ({ identifier, password }) => {
    try {
      let respon = await fetch('https://uatservice.fodxpert.com/auth/local/', {
        method: 'POST',
        body: JSON.stringify(identifier, password),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await respon.json();
      setToken(data.jwt);
      console.log(data);
      //   if (respon.jwt) {
      //     localStorage.setItem('int', respon.jwt);
      //   }
    } catch (err) {
      console.log(err);
    }
  };

  //   useEffect(() => {
  //     let token = localStorage.getItem('int');
  //     if (token) {
  //       console.log(token);
  //     }
  //   }, []);

  console.log(token.jwt);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    const data = {
      identifier: identifier,
      password: password,
    };
    console.log(data);
  };

  return (
    <>
      <Header />
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-2">LogIn</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example3cg">
                          primary Email Id
                        </label>
                        <input
                          value={identifier}
                          onChange={handleIdentifier}
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          value={password}
                          onChange={handlePassword}
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>

                      <p className="text-center text-muted mt-2 mb-0">
                        Don't have an account?{' '}
                        <Link to="/signup" className="fw-bold text-body">
                          <u>Signup here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
