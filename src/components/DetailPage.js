import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage(){
    let {id} = useParams();
    const [curr, setCurr] = useState({});
    const [image, setImage] = useState("");

    useEffect(()=>{
        console.log(id);
        let postData = JSON.parse(localStorage.getItem("data"));
        setCurr(postData[id]);
        console.log("Post", postData[id]);
        let url = `https://picsum.photos/200?random=${id}`
        setImage(url);
    }, [id]);

    if(id < 1 || id >= 100){
        return (
            <div>
                404 Page not found
            </div>
        )
    }
    
    return (
        <div className="container-fluid">
            <h2>Details Page for Post with ID {id}</h2>
            <div>
                <img src={image} alt="" />
                <h5>User ID : {curr.userId}</h5>
                <h5>Title : {curr.title}</h5>
                <p><b>Body : </b> {curr.body}</p>
            </div>
        </div>
    )
}