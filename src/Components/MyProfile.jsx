// MyProfile.js
import React from "react";
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const data = useSelector((state) => {
    return state.Profile; // Use the correct slice name
  });

  return (
    <>
      <h1>Profile</h1>
      
    </>
  );
};

export default MyProfile;
