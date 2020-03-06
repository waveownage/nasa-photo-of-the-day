import React, { useState, useEffect } from "react";
import axios from "axios";

function NasaData() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=4nnIiZSWQLwiLs9fOonoDPGg5jvWT5f171I7na4t`)
        .then(response => {
        setdata(response.data);
    });
}, []);


export default NasaData;




 

