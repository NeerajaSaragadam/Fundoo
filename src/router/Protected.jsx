import React from "react";
import { Redirect } from "react-router-dom";

function Protected(props){
    var auth=localStorage.getItem("token")
    return <div>{auth ? <props.component/> : <Redirect to="/"></Redirect> }</div>
}

export default Protected