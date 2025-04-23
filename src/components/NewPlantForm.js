import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [plantName, updateName] = useState("");
  const [plantImage, updateImage] = useState("");
  const [plantPrice, updatePrice] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name: plantName, image: plantImage, price: parseFloat(plantPrice) };

    // Simulate adding the new plant to the local data
    if (setPlants) {
      fetch('/db.json')
        .then(response => response.json())
        .then(data => {
          const updatedPlants = [...data.plants, newPlant];
          // In a real app, you would update the db.json file here
          // For this example, we'll just update the state
          setPlants(updatedPlants);
          updateName("");
          updateImage("");
          updatePrice("");
        });
    }
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
