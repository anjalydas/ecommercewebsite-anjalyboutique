import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { createSlice } from "@reduxjs/toolkit";
import { changeLoggedinState } from "../features/login/loginSlice";
import Header from "../header";
import Home from "./home";
import Footer from "../footer";

function Root() {
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.login.userLoggedIn);
    const user = useSelector(state => state.login.user);
    const handleSearchClick = () => {
        navigate('/search'); // Navigate to the /search page
      };
      useEffect(() => {
        if (user && user._id) {
          axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/check-user/${user._id}`, { withCredentials: true })
            .then(response => {
              dispatch(changeLoggedinState(true));
            })
            .catch(error => {
              dispatch(changeLoggedinState(false));
            });
        }
      }, [dispatch, user]);
  return (
    <>
      <Header></Header>
      <section>
      <div><Outlet/></div>
      </section>
      
<Footer/>
    </>
  );
}

export default Root;
