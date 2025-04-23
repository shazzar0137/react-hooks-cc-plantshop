import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

export const API_ENDPOINT = "https://plantsy-api.onrender.com";

function PlantPage() {
  const [plantData, updatePlantData] = useState([]);
  const [searchQuery, updateSearchQuery] = useState("");

  useEffect(() => {
    async function retrievePlants() {
      try {
        const response = await fetch(`${API_ENDPOINT}/plants`, {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error("Plant data retrieval failed");
        }

        const data = await response.json();
        updatePlantData(data);
      } catch (err) {
        console.error("Error loading plants:", err);
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
