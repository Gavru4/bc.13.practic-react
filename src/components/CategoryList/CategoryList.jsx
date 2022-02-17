import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postCategory } from "../../api";
import { useCategoriesContext } from "../../context/CategoriesProvider";

const CategoryList = ({ setCategory, transType }) => {
  const [inputCategory, setInputCategory] = useState("");

  const { [transType + "Cat"]: categoriesList, addCategory } =
    useCategoriesContext();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputCategory(value);
  };

  const handleSubmitNewCategory = (e) => {
    e.preventDefault();
    postCategory({ transType, category: { title: inputCategory } })
      .then((data) => addCategory({ transType, newCategory: data }))
      .catch(console.error);
    setInputCategory("");
  };

  return (
    <>
      <Link className="link" to={"/"}>
        Back
      </Link>
      <ul>
        {categoriesList.map((el) => (
          <li key={el.id}>
            <p onClick={() => setCategory(el.title)}>{el.title}</p>
            <button>...</button>
            {/* <div>
                <button>Delete</button>
                <button>Edit</button>
              </div> */}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmitNewCategory}>
        <input
          type="text"
          placeholder="new category"
          value={inputCategory}
          onChange={handleInputChange}
        />
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default CategoryList;
