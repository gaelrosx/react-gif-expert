import { useState } from "react";
import { AddCategories, GifsGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["iron man","samuray X"]);

  const onAddCategory = (newValue) => {
    if ( categories.includes(newValue) ) return;
    
    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategories onNewCategory={(newValue) => onAddCategory(newValue)} />

      {categories.map((category) => (
        <GifsGrid key={category} category={category} />
      ))}
    </>
  );
};
