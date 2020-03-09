import React from "react";

const NasaCard = props => {
  return (
    <li className="nasa-card">
      <h2>Title: {props.title}</h2>
      <p>Date:{props.date}</p>
      <p>Copyright: {props.copyright}</p>
      <p>Service Version: {props.service_version}</p>
      <p>Explanation: {props.explanation}</p>
      <img src={props.hdurl} alt={props.title}/>
    </li>
  );
};
export default NasaCard;
