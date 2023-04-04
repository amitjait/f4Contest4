import React from "react";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import {useEffect,useState } from "react";
import Error from "./components/Error";
import "./style.css"


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App(){

    const [data, setData] = useState([]);
    // const navigate = useNavigate();

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

  function click(id){
    console.log(id)
  }


//   let path = ;
  
    return (
        <div className="container">
            
            <Router>
                <div className="mt-3">
                    <h2>Social Media App</h2>
                    <hr></hr>
                </div>
                <Routes>

                    <Route exact path="/" element={<HomePage data={data} click={click}/>} />
                        <Route exact path="/:id" element={<DetailPage />}/>
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}