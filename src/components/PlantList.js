import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */
      PlantList.map((plant) => (
        <PlantCard key={plant.id} {...plant} />))
    }</ul>
  );
}

export default PlantList;
