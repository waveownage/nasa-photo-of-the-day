import React, { useState, useEffect } from "react";
import axios from "axios";

  axios.get(`https://api.nasa.gov/planetary/apod?api_key=4nnIiZSWQLwiLs9fOonoDPGg5jvWT5f171I7na4t`)
    .then(response => {
      console.log(response.data);
    });


