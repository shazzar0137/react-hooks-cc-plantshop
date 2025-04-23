import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleStockToggle() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button 
        className={isInStock ? "primary" : ""}
        onClick={handleStockToggle}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
