import React, { useEffect, useState } from "react";
import Login from "../Auth/Login";
import Header from "../Header/Header";

const MyProfile = () => {
  const [myprofileData, setMyProfileData] = useState([]);
  let token = localStorage.getItem("int");

  const getProfile = async (token) => {
    try {
      const resp = await fetch("https://uatservice.fodxpert.com/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await resp.json();
      console.log(data);
      setMyProfileData(data);
    } catch (e) {
      console.log(e);
    }
  };

  // const handleGetData = () => {
  //   getProfile(token);
  // };

  useEffect(() => {
    getProfile(token);
  }, []);

  console.log(myprofileData);

  return (
    <div>
      <Header />
      <h1>My Headers</h1>

      <div className="contain">{myprofileData.name}</div>
    </div>
  );
};

export default MyProfile;
