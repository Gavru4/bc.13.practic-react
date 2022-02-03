import React, { Component } from "react";
import { nanoid } from "nanoid";

class CategoryList extends Component {
  state = {
    inputCategory: "",
  };

  handleInputChange = (e) => {
    const { value } = e.terget;
    this.setState({ inputCategory: value });
  };

  hendlerSubmitCategory = (e) => {
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
    const { categorieslist } = this.props;
    return (
      <>
        <ul>
          {categorieslist.map((el) => {
            <li key={el.id}>
              <p>{el.title}</p>
              <button>...</button>
              <div>
                <button>Delate</button>
                <button>Edit</button>
              </div>
            </li>;
          })}
        </ul>
        <form action="" onSubmit={this.hendlerSubmitCategory}>
          <input
            type="text"
            placeholder="new category"
            name="text"
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
