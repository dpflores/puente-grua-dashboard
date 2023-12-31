import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  // axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLoaded(true);
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.username);

          //   navigate("/");
          //
        } else {
          setAuth(false);
          navigate("/login");
          setMessage(res.data.Error);
        }
      });
  });

  return (
    // <div className="flex flex-row bg-white-100 h-screen w-screen overflow-hidden">
    //   <Sidebar />

    //   <div className="flex-1 overflow-auto">
    //     <Header />
    //     <div>{<Outlet />}</div>
    //   </div>
    // </div>

    <div className="flex flex-row bg-white-100 h-screen w-screen overflow-hidden">
      {loaded ? (
        <Fragment>
          <Sidebar />

          <div className="flex-1 overflow-auto">
            <Header />
            <div>{<Outlet />}</div>
          </div>
        </Fragment>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
