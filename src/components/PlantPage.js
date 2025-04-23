import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, updatePlantData] = useState([]);
  const [searchQuery, updateSearchQuery] = useState("");

  useEffect(() => {
    async function retrievePlants() {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const data = await response.json();
        updatePlantData(data.plants);
      } catch (err) {
        console.error('Error loading plants:', err);
      }
    }

    retrievePlants();
  }, []);

  const displayPlants = plantData.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={updatePlantData} />
      <Search searchValue={searchQuery} setSearchValue={updateSearchQuery} />
      <PlantList plants={displayPlants} />
    </main>
  );
}

export default PlantPage;