import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../UI/Card";
import "../css/Signup.css";
import { Link } from "react-router-dom";
import Home from "../Dashboard/Home";

const dataPackage = [
  {
    name: "corporate",
  },
  {
    name: "personal",
  },
];

const Signup = () => {
  const [name, setName] = useState("");
  const [compName, setCompName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [filerPartyPack, setFilterPartyPack] = useState("personal");
  const [filterState, setFilterState] = useState("tamil nadu");
  const [filterCountry, setFilterCountry] = useState("India");

  const handleName = (e) => {
    setName(e.target.values);
  };

  const handleCompName = (e) => {
    setCompName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePartyPack = (selectedPackage) => {
    setFilterPartyPack(selectedPackage);
  };

  const handleFilterState = (selectedState) => {
    setFilterState(selectedState);
  };

  const handleCountry = (selectedCountry) => {
    setFilterCountry(selectedCountry);
  };

  //   const handleFilterPackage = dataPackage.map(e);

  return (
    <>
      <Header />
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 ">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ "border-radius": "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-2">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-2 ">
                        <label className="form-label" for="form3Example1cg">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" for="form3Example1cg">
                          Person Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" for="form3Example3cg">
                          primary Email Id
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" for="form3Example3cg">
                          primary contact number
                        </label>
                        <input
                          type="number"
                          id="form3Example3cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-sm"
                        />
                      </div>

                      <div className="form-outline mb-2">
                        <label
                          className="form-label"
                          htmlFor="party package type"
                        >
                          Party Package type
                        </label>
                        <br />
                        <select
                          className="select form-control-sm "
                          id="form3Example4cg"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Personal</option>
                          <option value="2">Corporate</option>
                        </select>
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="country">
                          Country
                        </label>
                        <br />
                        <select
                          className="select form-control-sm "
                          id="form3Example4cg"
                          style={{ width: "100%" }}
                        >
                          <option value="1">India</option>
                          <option value="2">U.S</option>
                        </select>
                      </div>

                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="country">
                          State
                        </label>
                        <br />
                        <select
                          className="select form-control-sm "
                          id="form3Example4cg"
                          style={{ width: "100%" }}
                        >
                          <option value="1">West Bengal</option>
                          <option value="2">Karnataka</option>
                        </select>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-2">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          for="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-2 mb-0">
                        already Have an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
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

export default Signup;
