import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from "../api";

const CategoriesContext = createContext();
export const useCategoriesContext = () => useContext(CategoriesContext);

function CategoriesProvider({ children }) {
  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

  const addCategory = ({ transType, newCategory }) => {
    transType === "incomes" && setIncomesCat((prev) => [...prev, newCategory]);
    transType === "costs" && setCostsCat((prev) => [...prev, newCategory]);
  };

  useEffect(() => {
    getCategories("incomes")
      .then((data) => setIncomesCat(data))
      .catch(console.log);
    getCategories("costs")
      .then((data) => setCostsCat(data))
      .catch(console.log);
  }, []);

  return (
    <CategoriesContext.Provider value={{ incomesCat, costsCat, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
