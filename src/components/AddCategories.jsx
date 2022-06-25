import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategories = ({ onNewCategory }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = category.trim();
    if (inputValue.length > 2) {
      //setCategories( cat => [category.trim(), ...cat])
      onNewCategory(inputValue);
      setCategory("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="new catgory"
      />
    </form>
  );

  AddCategories.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
  };
};
