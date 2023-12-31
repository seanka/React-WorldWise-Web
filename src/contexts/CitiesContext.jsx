import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        console.log();
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (err) {
        alert(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
