import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./nasacard";

function NasaData() {
  const [nasa, setnasa] = useState([]);
  useEffect(() => {
    axios.get( `https://api.nasa.gov/planetary/apod?api_key=4nnIiZSWQLwiLs9fOonoDPGg5jvWT5f171I7na4t`)
      .then(response => {
        setnasa(response.data);
        console.log(response.data);
      })
      .catch((err) => {
          console.log('Nope', err)
      })
  }, []);

  return (
    <div>
        <ul>
      <NasaCard
        title={nasa.title}
        date={nasa.date}
        copyright={nasa.copyright}
        service_version={nasa.service_version}
        explanation={nasa.explanation}
        hdurl={nasa.hdurl}
      />
      </ul>
    </div>
  );
}

export default NasaData;
