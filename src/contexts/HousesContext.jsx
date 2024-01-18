import { createContext, useContext, useEffect, useState } from "react";

const HousesContext = createContext();

function HousesProvider({ children }) {
  const [error, setError] = useState("");
  const [housesData, setHousesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getHouses() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://wizard-world-api.herokuapp.com/Houses"
        );

        const data = await res.json();
        if (!data || !Array.isArray(data) || !data.length)
          throw new Error("Invalid Houses data provided by the API!");

        setHousesData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    getHouses();
  }, []);

  return (
    <HousesContext.Provider value={{ housesData, isLoading, error }}>
      {children}
    </HousesContext.Provider>
  );
}

function useHouses() {
  const context = useContext(HousesContext);
  if (context === undefined)
    throw new Error("HousesContext was used outside the HousesProvider");
  return context;
}

export { HousesProvider, useHouses };
