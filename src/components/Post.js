import React from "react";
import { useNavigate } from "react-router-dom";



export default function Post({id,userId, title, body, click}){
    const navigate = useNavigate();

    let imgUrl = `https://picsum.photos/200?random=${id}`;

    function nav(thisId){
        
        click(thisId);
        let url = `/${thisId}`
        navigate(url);
        console.log("Nav", thisId, url);
    }

    return (
        <div id={id} className="card m-1 mt-2 mb-1" style={{width: "16rem"}} onClick={() => nav(id)} >
            <img id={id} class="card-img-top" src={imgUrl} alt="Loading..." />
            <div id={id} class="card-body">
                <h5 id={id}>User ID : {userId}</h5>
                <h5 id={id} class="card-title">Title : {title}</h5>
                <p id={id} class="card-text"><b>Body : </b> {body}</p>
            </div>
        </div>
    )
}