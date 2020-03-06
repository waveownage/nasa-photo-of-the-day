import React from "react";

const NasaCard = props => {
  return (
    <li className="nasa-card" key={props.id}>
      <h2>Title: {props.title}</h2>
      <p>Date:{props.date}</p>
      <p>hdurl: {props.hurl}</p>
      <p>Copyright: {props.copyright}</p>
      <p>Service Version: {props.service_version}</p>
      <p>Explanation: {props.explanation}</p>
    </li>
  );
};
export default NasaCard;