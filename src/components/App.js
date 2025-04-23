import React, { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {
  useEffect(() => {
    async function fetchData (){
      try {
        const response = await fetch('/db.json');

        if (!response.ok) {
          throw new Error("Data fetch failed");
        }

        const plantsData = await response.json();
        console.log(plantsData);
        
        global.basePlants = plantsData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); 

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
