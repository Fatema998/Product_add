// latested preview
import React, { useState, useEffect } from "react";

const Card = ({ addItem }) => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDesserts(data))
      .catch((error) => console.error("Error loading the data:", error));
  }, []);

  return <></>;
};

export default Card;
