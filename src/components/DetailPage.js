import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";

export default function DetailPage(){
    let {id} = useParams();
    const [curr, setCurr] = useState({});
    const [image, setImage] = useState("");

    useEffect(()=>{

        let postData = JSON.parse(localStorage.getItem("data"));
        setCurr(postData[id]);
        let url = `https://picsum.photos/200?random=${id}`
        setImage(url);

    }, [id]);

    if(id < 1 || id >= 100){
        return (
            <Error />
        )
    }
    
    return (
        <div className="container-fluid w-100 m-0">
            <h4>Details Page for Post with ID {id}</h4>
            <div>
                <img className="img rounded mb-3 mt-3" src={image} alt="" />
                <h5>User ID : {curr.userId}</h5>
                <h5>Title : {curr.title}</h5>
                <p className="h w-75"><b>Body : </b> {curr.body}</p>
            </div>
        </div>
    )
}