import React from "react";



export default function Post({id,userId, title, body, click}){
    let imgUrl = `https://picsum.photos/200?random=${id}`;

    return (
        <div id={id} className="card m-1" style={{width: "16rem"}} onClick={click} >
            <img id={id} class="card-img-top" src={imgUrl} alt="Loading..." />
            <div id={id} class="card-body">
                <h5 id={id}>User ID : {userId}</h5>
                <h5 id={id} class="card-title">Title : {title}</h5>
                <p id={id} class="card-text"><b>Body : </b> {body}</p>
            </div>
        </div>
    )
}