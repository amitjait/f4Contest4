import React from "react";
import Post from "./Post";

export default function HomePage({data, click}){

    function sortBody(str){
        if(str.length <= 30){
            return str;
        }

        return str.substring(0, 50)+"...";
    }

    function sortTitle(title){
        if(title.length <= 25){
            return title;
        }

        return title.substring(0, 22)+"...";
    }


    return (
            <div className="container-fluid d-flex flex-wrap justify-content-evenly mb-3">
                {
                    data.map((post) =>{
                        return <Post id={post.id} userId={post.userId} title={sortTitle(post.title)} body={sortBody(post.body)} click={click} />
                    })
                }
            </div>
        
        
    )
}