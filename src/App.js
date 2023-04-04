import React from "react";
import HomePage from "./components/HomePage";

import DetailPage from "./components/DetailPage";
import {useEffect,useState } from "react";
import Error from "./components/Error";


import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

export default function App(){
    const [id, setId] = useState(0);
    const [detail, setDetail] = useState({});
    const [data, setData] = useState([]);

  function fetchData(){
    
    let url = `https://jsonplaceholder.typicode.com/posts`;

    console.log(url);
    fetch(url)
    .then((response) =>{
      return response.json();
    }).then((actualData) =>{
    //   console.log(typeof actualData, actualData[0]);
      setData(actualData);
      localStorage.setItem("data", JSON.stringify(actualData));
    }).catch((e) =>{
      alert("Error", e);
      return;
    })
  }

  

  useEffect(fetchData, []);

  function click(event){
    console.log(event.target.id)
    setId(event.target.id);
  }


//   let path = ;
  
    return (
        <div className="container">
            
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage data={data} click={click}/>} />
                        <Route exact path="/:id1" element={<DetailPage id={id} data={detail}/>}/>
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}