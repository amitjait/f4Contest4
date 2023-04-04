import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export default function DetailPage({id, data}){
    let {id1} = useParams();
    const [curr, setCurr] = useState({});
    const [image, setImage] = useState("");

    useEffect(()=>{
        let postData = JSON.parse(localStorage.getItem("data"));
        setCurr(postData[id1]);
        console.log(postData[id1]);
        let url = `https://picsum.photos/200?random=${id1}`
        setImage(url);
    }, []);

    if(id1 < 1 || id1 >= 100){
        return (
            <div>
                404 Page not found
            </div>
        )
    }
    
    console.log(id1);
    return (
        <div className="container-fluid">
            <h2>Details Page for Post with ID {id1}</h2>
            <div>
                <img src={image} alt="" />
                <h5>User ID : {curr.userId}</h5>
                <h5>Title : {curr.title}</h5>
                <p><b>Body : </b> {curr.body}</p>
            </div>
        </div>
    )
}