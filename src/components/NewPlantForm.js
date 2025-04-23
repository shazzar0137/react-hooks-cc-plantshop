import React, { useState } from "react";
import { API_ENDPOINT } from "./PlantPage";

function NewPlantForm({ setPlants }) {
  const [plantName, updateName] = useState("");
  const [plantImage, updateImage] = useState("");
  const [plantPrice, updatePrice] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const plantToAdd = { plantName, plantImage, plantPrice };
    
    fetch(`${API_ENDPOINT}/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantToAdd),
    })
    .then(() => {
      updateName("");
      updateImage("");
      updatePrice("");
      
      // Refresh plant list if parent component provides the setter
      if (setPlants) {
        return fetch(`${API_ENDPOINT}/plants`)
          .then(res => res.json())
          .then(data => setPlants(data));
      }
    })
    .catch(error => console.error("Error submitting plant:", error));
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit} className="form">
        <input 
          type="text" 
          name="name" 
          value={plantName} 
          placeholder="Plant name" 
          onChange={(e) => updateName(e.target.value)}  
        />
        <input 
          type="text" 
          name="image" 
          value={plantImage}
          placeholder="Image URL" 
          onChange={(e) => updateImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          value={plantPrice} 
          step="0.01" 
          placeholder="Price" 
          onChange={(e) => updatePrice(e.target.value)} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
