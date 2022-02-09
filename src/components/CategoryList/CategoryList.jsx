import React, { Component } from "react";
import { nanoid } from "nanoid";

class CategoryList extends Component {
  state = { inputCategory: "" };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ inputCategory: value });
  };

  handleSubmitNewCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      title: this.state.inputCategory,
      id: nanoid(),
    };
    this.props.addCategory(newCategory);
    this.reset();
  };

  reset = () => {
    this.setState({ inputCategory: "" });
  };

  render() {
    const { categoriesList, togleCategoryList, setCategory } = this.props;
    return (
      <>
        <button type="button" onClick={togleCategoryList}>
          Back
        </button>
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
        <form onSubmit={this.handleSubmitNewCategory}>
          <input
            type="text"
            placeholder="new category"
            value={this.state.inputCategory}
            onChange={this.handleInputChange}
          />
          <button type="submit">+</button>
        </form>
      </>
    );
  }
}

export default CategoryList;
