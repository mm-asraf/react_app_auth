import React, { useEffect, useState } from "react";
import Login from "../Auth/Login";
import Header from "../Header/Header";

const MyProfile = () => {
  const [myprofileData, setMyProfileData] = useState("");
  let token = localStorage.getItem("int");

  const getProfile = async (token) => {
    try {
      const resp = await fetch("https://uatservice.fodxpert.com/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // notice the Bearer before your token
        },
      });

      let data = await resp.json();
      console.log(data);
      setMyProfileData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetData = () => {
    getProfile(token);
  };

  return (
    <div>
      <Header />
      <h1>My Headers</h1>
      <button type="button" onClick={handleGetData}>
        get data
      </button>
    </div>
  );
};

export default MyProfile;
