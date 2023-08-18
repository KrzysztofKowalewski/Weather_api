import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Weather(){
    
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     async function getData() {
    //       const actualData = await fetch(
    //       `https://api.weatherapi.com/v1/current.json?key=23f9bf1427714d428d9184958231708&q&q=London&aqi=no`
    //       ).then(response => response.json())
    //       console.log(actualData)
    //       setData(actualData)
    //       console.log(data)
          
          
    //     }
    //     getData()
    //   }, [])

    useEffect(() => {
      const loadWeather = async () => {

          // Till the data is fetch using API 
          // the Loading page will show.
          setLoading(true);
          // Await make wait until that 
          // promise settles and return its result
          const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?key=23f9bf1427714d428d9184958231708&q&q&q=Madrid&aqi=no");

          // After fetching data stored it in posts state.
          setWeather(response.data);
          console.log(response.data)
          // Closed the loading page
          setLoading(false);
      }

      // Call the function
      loadWeather();
    }, []);

    
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <div>
            
              {loading ? (
                    <h4>Loading...</h4>) :
                    (
                        <ul>
                            <li>{weather.location.name}</li>
                            <li>{weather.current.temp_c}</li>
                        </ul>
                    )
                }
        </div>
        </>
    );
}

export default Weather;